import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    //const {user_id} = request.headers; //NEED TO VALIDATE USER_ID is ADMIN.
    const allUsers = this.listAllUsersUseCase.execute();

    return response.json(allUsers);
  }
}

export { ListAllUsersController };
