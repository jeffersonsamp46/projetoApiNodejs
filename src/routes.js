import {Router} from 'express'
import SessionController from './controller/SessionController'

const routes = new  Router()

routes.post('/session',SessionController.store)

export default routes