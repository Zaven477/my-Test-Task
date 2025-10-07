import type { OpenModalApproved, UserApproved } from "./types";
import { getDayWord } from "../../utils.ts/getDayWord";

export const LoanApprovedModal = ({
  userData,
  userApplyData,
  setOpenModal,
}: UserApproved & OpenModalApproved) => {
  const approvalMessage = `Поздравляем ${userData?.lastName} ${
    userData?.firstName
  }. Вам одобрена ${userApplyData?.amount} на ${
    userApplyData?.term
  } ${getDayWord(userApplyData?.term)}.`;

  const closeModalApproved = () => {
    setOpenModal(false);
  };

  return (
    <div className="fixed top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[rgba(0,0,0,0.5)]">
      <div className="shadow-md bg-[white] w-[500px] h-[100px] absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 rounded-[3px] max-[550px]:w-[400px] max-[440px]:w-[300px]">
        <div className="flex justify-center">
          <span className="text-[18px] mt-[10px] max-[550px]:w-[360px] max-[440px]:w-[280px]">
            {approvalMessage}
          </span>
        </div>
        <div className="flex justify-end pr-[10px]">
          <button
            className="mt-[35px] w-[80px] h-[25px] bg-[#00BFFF] border-none text-[white] text-[16px] cursor-pointer rounded-[3px] max-[550px]:mt-[15px]"
            onClick={closeModalApproved}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
