import { Request, Response } from "express";
import { urlmodel } from "../model/shorturl";

// POST /shorturl - Create
export const createurl = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullurl } = req.body;
    const urlfound = await urlmodel.find({ fullurl });

    if (urlfound.length > 0) {
      res.status(409).send(urlfound);
    } else {
      const shorturl = await urlmodel.create({ fullurl });
      res.status(201).send(shorturl);
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong!" });
  }
};

// GET /shorturl - Get All
export const getallurl = async (req: Request, res: Response): Promise<void> => {
  try {
    const shorturl = await urlmodel.find();
    res.status(200).send(shorturl);
  } catch (error) {
    res.status(500).send({ message: "something went wrong!" });
  }
};

// GET /shorturl/:id - Redirect
export const geturl = async (req: Request, res: Response): Promise<void> => {
  try {
    const shorturl = await urlmodel.findOne({ shorturl: req.params.id });

    if (!shorturl) {
      res.status(404).send({ message: "full url not found" });
      return;
    }

    shorturl.clicks++;
    await shorturl.save();

    res.redirect(shorturl.fullurl);
  } catch (error) {
    res.status(500).send({ message: "something went wrong!" });
  }
};

// DELETE /shorturl/:id
export const deleteurl = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await urlmodel.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).send({ message: "url successfully deleted" });
    } else {
      res.status(404).send({ message: "url not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "something went wrong!" });
  }
};
