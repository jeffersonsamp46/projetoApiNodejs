/*
metodos: index, show, update, store, destroy
    *index: listagem de acessos
    *store: Criar uma sessao
    *show: Quando queremos listar uma UNICA SESSAO
    *update: quando queremos alterar alguma sesssao
    *destroy: quando queremos deletar alguma secao
*/

import User from '../models/User'

class SessionController{

    async store(req, res){
        const { email} = req.body

        // verifica se o usuario existe
        let user = await User.findOne({ email })
        if(!user)
            user = await User.create({ email })

        return res.json( user )
    }

}

export default new SessionController()