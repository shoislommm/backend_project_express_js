import prisma from '../db'

export const createPost = async (req, res) => {

    try {
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                text: req.body.text,
                authorId: req.user.id
            },
        })


        res.json({ data: post })
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' })
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                author: true,
                likes: true,
                comments: true
            }
        })


        res.json(post)
    } catch (error) {
        res.status(500).json({ error: 'Cannot get a post' })
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
                likes: true,
                comments: true,
            },
        })
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving posts' })
    }
};


export const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, text } = req.body
    const { id: userId } = req.user

    try {
        const post = await prisma.post.findUnique({ where: { id } })

        if (post?.authorId !== userId) {
            return res.status(403).json({ error: 'Permission denied' })
        }

        const updatedPost = await prisma.post.update({
            where: { id },
            data: { title, text },
        });
        res.json(updatedPost)
    } catch (error) {
        res.status(500).json({ error: 'Error updating post' })
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params
    const { id: userId } = req.user

    try {
        const post = await prisma.post.findUnique({ where: { id } })

        if (post?.authorId !== userId) {
            return res.status(403).json({ error: 'Permission denied' })
        }

        await prisma.post.delete({ where: { id } })
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting post' })
    }
}
