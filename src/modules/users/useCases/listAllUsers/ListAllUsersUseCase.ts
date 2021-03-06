import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    //Find user by ID and check if it is an admin
    const validUser = this.usersRepository.findById(user_id);

    if (!validUser) {
      throw new Error("Invalid User or User not found!");
    }

    if (validUser.admin === false) {
      throw new Error("Unauthorized, user is not an admin!");
    }

    if (validUser) {
      const users = this.usersRepository.list();
      return users;
    }
  }
}

export { ListAllUsersUseCase };
