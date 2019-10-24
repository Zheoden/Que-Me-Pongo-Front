export interface JwtResponseI {
  dataUser:
    {
      id: number;
      username: string;
      email: string;
      accesToken: string;
      expiresTime: string;
    }
}
