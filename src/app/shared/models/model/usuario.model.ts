export interface Usuario {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: number,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  },
  address: {
      street: string,
      suite: string,
      city : string,
      zipcode: string,
  }
}