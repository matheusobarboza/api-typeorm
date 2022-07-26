import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectController {
  async create(req: Request, res: Response) {
    const { name } = req.body;

    if(!name) {
      return res.status(400).json({ message: "The name is required" })
    }

    try{
      const newSubject = subjectRepository.create({ name });

      await subjectRepository.save(newSubject);

      return res.status(201).json(newSubject);

      console.log(newSubject);
    } catch(err) {
      console.log(err)
      res.status(500).json({ message: 'Internal Server Error' })
    }

  }
}