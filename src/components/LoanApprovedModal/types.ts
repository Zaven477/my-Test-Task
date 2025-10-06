export type UserInitials = {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
};

export type LoadParameters = {
  amount: number;
  term: number;
};

export type OpenModalApproved = {
  setOpenModal: (arg: boolean) => void;
};

export type UserApproved = {
  userData: UserInitials | null;
  userApplyData: LoadParameters | null;
};
