import {Router} from 'express'
import SessionController from './controller/SessionController'
import HouseController from './controller/HouseController'

import multer from 'multer'
import uploadConfig from './config/upload'

const routes = new  Router()
const upload = multer(uploadConfig)

routes.post('/session',SessionController.store)

routes.post('/houses', upload.single('thumbnail'), HouseController.store)

export default routes