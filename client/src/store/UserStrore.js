import {makeAutoObservable} from "mobx"

export default class UserStorage{
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }
    
    setIsAuth(bool){
        console.log("Yes")
        this._isAuth = true
    }

    setUser(user){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}