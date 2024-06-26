import * as dotenv from 'dotenv'
// import router from './router.js'
import server from './server'

dotenv.config()


server.listen(4000, () => {
    console.log('создался сервер http://localhost:4000')
})
