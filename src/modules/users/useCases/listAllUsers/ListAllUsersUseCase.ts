import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  //NEED TO VALIDATE USER_ID is ADMIN.
  //execute({ user_id }: IRequest): User[] {
  //  const validateUserAdmin = user_id //check if user is admin, utilize get_user_by_id.
  execute(): User[] {
    const validateUserAdmin = true; //remove this line.

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
