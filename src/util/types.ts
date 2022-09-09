export type user = {
  email: string,
  id: string,
  firstName: string,
  secondName: string
  token?: null | string
};
export interface UsersListTypes {
  users: user[] | [];
}
