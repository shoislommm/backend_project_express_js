import prisma from '../db'

export const likePost = async (req, res) => {
  const { postId } = req.params
  const { id: userId } = req.user

  try {
    const like = await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    res.json(like);
  } catch (error) {
    res.status(500).json({ error: 'Error liking post' });
  }
};

export const commentPost = async (req, res) => {
  const { postId } = req.params
  const { text } = req.body
  const { id: userId } = req.user

  try {
    const comment = await prisma.comment.create({
      data: {
        text,
        postId,
        userId,
      },
    });

    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Error commenting on post' });
  }
};
