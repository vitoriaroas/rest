import { MongoClient } from "mongodb";
import { Team } from '../modal/team'

let _client: MongoClient;

const getClient = async () => {
    if(!_client) {
        _client = new MongoClient('mongodb://localhost:27017')
        _client = await _client.connect()
    }
    return _client
}

export const getTeamCollection = async () => {
    const client = await getClient()
    const db = client.db('db')
    const col = db.collection<Team>('teams')
    return col
}