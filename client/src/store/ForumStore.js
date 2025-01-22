import {makeAutoObservable} from "mobx"

export default class ForumStore{
    constructor(){
        this._forums = []
        makeAutoObservable(this)
    }
    
    setForums(forums){
        console.log("?????")
        this._forums = forums
    }
    get name(){
        return this._name
    }

    get desc(){
        return this._desc
    }
}