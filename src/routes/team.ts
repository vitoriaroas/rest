import { Router } from "express";
import { getAllTeams, createTeam } from "../service/team";
import { Team } from "../modal/team";

export const teamsRouter = Router()

teamsRouter.get('/', async (req, res) => {
    const teams = await getAllTeams()
    res.send(teams)
})

teamsRouter.post('/', async (req, res) => {
const team = req.body as Team; 
await createTeam(team)
res.send().status(201)
})