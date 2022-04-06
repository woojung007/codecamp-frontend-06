// 컨테이너
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  IBoardWriteProps,
  IUpdateVariables,
} from "./BoardWrite.types";
import { Modal } from 'antd';
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '../../../../commons/types/generated/types';





export default function BoardWrite(props: IBoardWriteProps) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  // const [writer, setWriter] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  // const [contents, setContents] = useState("");
  // const [youtubeUrl, setYoutubeUrl] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [address, setAddress] = useState("")
  // const [addressDetail, setAddressDetail] = useState("")
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [isOpen, setIsOpen] = useState(false);


// input 창 refactoring
  const [Inputs, setInputs] = useState({
      writer: "",
      password: "",
      title: "",
      contents: "",
      youtubeUrl: "",
        zipcode:"",
        address:"",
        addressDetail:""
  })


  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...Inputs,
      [event.target.id]: event.target.value
    })
  }


  // 입력값 보내기 & detail로 라우팅
  const [createBoard] = useMutation<Pick<IMutation,'createBoard'>,IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation,'updateBoard'>,IMutationUpdateBoardArgs>(UPDATE_BOARD);

  // onclickUpdate
  const onClickUpdate = async () => {
    try {
      const updateVariables: IUpdateVariables = {
        boardId: router.query.boardId
      };
      // 비어있지 않으면 채워줘라
      if (Inputs.writer) updateVariables.writer = Inputs.writer;
      if (Inputs.title) updateVariables.title = Inputs.title;
      if (Inputs.contents) updateVariables.content = Inputs.contents;
      if (Inputs.youtubeUrl) updateVariables.youtubeUrl = Inputs.youtubeUrl;
      if (zipcode || address || Inputs.addressDetail){
        updateVariables.boardAddress = {};
      if(zipcode) updateVariables.boardAddress.zipcode = zipcode;
      if(address) updateVariables.boardAddress.address = address;
      if(Inputs.addressDetail) updateVariables.boardAddress.addressDetail = Inputs.addressDetail;
      }
    


      await updateBoard({
        variables: {
          updateBoardInput: {
            title: Inputs.title,
            contents: Inputs.contents,
            youtubeUrl: Inputs.youtubeUrl,
            boardAddress:{
              zipcode,
              address,
              addressDetail: Inputs.addressDetail
            }
          },
          password: Inputs.password,
          boardId: router.query.boardId,
        },
      });
    
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      // if (error instanceof Error) Modal.error(error.message);
    }
  };

  const callGraphqlAPI = async () => {

    if (Inputs.writer === "") {
      setWriterError("이름을 입력해 주세요");
    } else {
      setWriterError("");
    }

    if (Inputs.password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else {
      setPasswordError("");
    }

    if (Inputs.title === "") {
      setTitleError("제목을 입력해주세요");
    } else {
      setTitleError("");
    }

    if (Inputs.contents === "") {
      setContentError("내용을 입력해주세요");
    } else {
      setContentError("");
    }

    try {
      const result = await createBoard({     
        variables: {
          createBoardInput: {
            writer: Inputs.writer,
            password:Inputs.password,
            title: Inputs.title,
            contents:Inputs.contents,
            youtubeUrl:Inputs.youtubeUrl,
            boardAddress:{
              zipcode: Inputs.zipcode,
              address: Inputs.address,
              addressDetail:Inputs.addressDetail
            }
          }
        },
      });
      // console.log("Inputs", Inputs)

      if (Inputs.writer !== "" && Inputs.password !== "" && Inputs.title !== "" && Inputs.contents !== "") {
        Modal.success({content: "게시물 등록에 성공했습니다!! 상세페이지로 이동합니다!"})
      }
    
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {}
  };



  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
      setInputs({
        ...Inputs,
        [event.target.id]: event.target.value
      })
    if (event.target.id && Inputs.password && Inputs.title && Inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };



  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...Inputs,
      [event.target.id]: event.target.value
    })
    

    if (
      Inputs.writer !== "" &&
      event.target.id !== "" &&
      Inputs.title !== "" &&
      Inputs.contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...Inputs,
      [event.target.id]: event.target.value
    })
    
    if (
      Inputs.writer !== "" &&
      Inputs.password !== "" &&
      event.target.id !== "" &&
      Inputs.contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...Inputs,
      [event.target.id]: event.target.value
    })
    
    if (
      Inputs.writer !== "" &&
      Inputs.password !== "" &&
      Inputs.title !== "" &&
      event.target.id
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };


const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
  setInputs({
    ...Inputs,
    [event.target.id]: event.target.value
  })
  
}


  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...Inputs,
      [event.target.id]: event.target.value
    })
    
  }


  // 주소 modal창

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };


  const handleComplete = (data: any) => {
    setZipcode(data.zonecode)
    setAddress(data.address)
    setIsOpen(false);
  }

  return (
    <BoardWriteUI
      onChangeInputs={onChangeInputs}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      // onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      callGraphqlAPI={callGraphqlAPI}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={Inputs.addressDetail}



    />
  );
}
