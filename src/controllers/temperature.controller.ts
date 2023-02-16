import { Request, Response } from 'express';

interface Props {
  id: string;
  Temperature: string;
  Time: Date;
}

let info = {} as Props;

export const getDataTemperature = async (req: Request, res: Response) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(info);
  } catch (err) {
    res.status(500).json({ message: "Error ao trazer dados!" });
  }
};

export const createDataTemperature = async (req: Request, res: Response) => {
  try {
    info = {
      id: String(req.query.Garrafa),
      Temperature: String(req.query.Temperatura),
      Time: new Date()
    }
    res.send({ "Status": 200 })
  } catch (err) {
    res.status(401).json({ message: "Senha Incorreta" });
  }
};