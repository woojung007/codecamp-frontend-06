// 컨테이너
import { ChangeEvent, useState } from 'react';
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries";
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
  const [imageUpload, setImageUpload] = useState<string | undefined>("")


  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [address, setAddress] = useState("")
  const [addressDetail, setAddressDetail] = useState("")

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const [createBoard] = useMutation<Pick<IMutation,'createBoard'>,IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] = useMutation<Pick<IMutation,'updateBoard'>,IMutationUpdateBoardArgs>(UPDATE_BOARD);




  // onclickUpdate
  const onClickUpdate = async () => {
    try {
      const updateVariables: IUpdateVariables = {
        boardId: router.query.boardId
      };
      // 비어있지 않으면 채워줘라
      if (writer) updateVariables.writer = writer;
      if (title) updateVariables.title = title;
      if (contents) updateVariables.content = contents;
      if (youtubeUrl) updateVariables.youtubeUrl = youtubeUrl;
      if (zipcode || address || addressDetail){
        updateVariables.boardAddress = {};
      if(zipcode) updateVariables.boardAddress.zipcode = zipcode;
      if(address) updateVariables.boardAddress.address = address;
      if(addressDetail) updateVariables.boardAddress.addressDetail = addressDetail;
      }
    


      await updateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl,
            boardAddress:{
              zipcode,
              address,
              addressDetail: addressDetail
            }
          },
          password: password,
          boardId: String(router.query.boardId),
        },
      });
    
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      // if (error instanceof Error) Modal.error(error.message);
    }
  };

  const callGraphqlAPI = async () => {

    if (writer === "") {
      setWriterError("이름을 입력해 주세요");
    } else {
      setWriterError("");
    }

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    } else {
      setPasswordError("");
    }

    if (title === "") {
      setTitleError("제목을 입력해주세요");
    } else {
      setTitleError("");
    }

    if (contents === "") {
      setContentError("내용을 입력해주세요");
    } else {
      setContentError("");
    }

    try {
      const result = await createBoard({     
        variables: {
          createBoardInput: {
            writer: writer,
            password:password,
            title: title,
            contents:contents,
            youtubeUrl:youtubeUrl,
            boardAddress:{
              zipcode: zipcode,
              address: address,
              addressDetail:addressDetail
            }

          }
        },
      });
      // console.log("Inputs", Inputs)

      if (writer !== "" && password !== "" && title !== "" && contents !== "") {
        Modal.success({content: "게시물 등록에 성공했습니다!! 상세페이지로 이동합니다!"})
      }
    
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {}
  };



  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
      setWriter(event.target.value)
    if (event.target.id && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };



  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)

    if (
      writer !== "" &&
      event.target.id !== "" &&
      title !== "" &&
      contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

    
    if (
      writer !== "" &&
      password !== "" &&
      event.target.id !== "" &&
      contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.id
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };


const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
  setAddressDetail(event.target.value)

}


  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
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
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}

      callGraphqlAPI={callGraphqlAPI}
      onClickUpdate={onClickUpdate}

      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentError={contentError}
      isActive={isActive}



      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      imageUpload={imageUpload}
      setImageUpload={setImageUpload}

      isEdit={props.isEdit}
      data={props.data}


    />
  );
}
