import { getTeamCollection } from "../gateway/mongo";
import { Team } from "../modal/team";

export const createTeam = async (team: Team) => {
  const col = await getTeamCollection();
  await col.insertOne(team);
};

export const getAllTeams = async () => {
  const col = await getTeamCollection();
  const teams = await col.find({}).toArray();
  return teams;
};
