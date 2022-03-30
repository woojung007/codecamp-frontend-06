//컨테이너
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  IBoardWriteProps,
  IUpdateVariables,
} from "./BoardWrite.types";
import { Modal, Button } from 'antd';


export default function BoardWrite(props: IBoardWriteProps) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("")

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [date, setData] = useState("")
  const [zipcode, setZipcode] = useState()


  // 입력값 보내기 & detail로 라우팅
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  //onclickUpdate
  const onClickUpdate = async () => {
    try {
      const updateVariables: IUpdateVariables = {
        boardId: router.query.boardId
      };

      //비어있지 않으면 채워줘라
      if (writer !== "") updateVariables.writer = writer;
      if (title !== "") updateVariables.title = title;
      if (contents !== "") updateVariables.content = contents;
      if (youtubeUrl !== "") updateVariables.youtubeUrl = youtubeUrl;
    


      await updateBoard({
        variables: {
          updateBoardInput: {
            title: title,
            contents: contents,
            youtubeUrl: youtubeUrl
          },
          password: password,
          boardId: router.query.boardId,
        },
      });
      // console.log(router.query.boardId);
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      // if (error instanceof Error) Modal.error(error.message);
    }
  };

  const callGraphqlAPI = async () => {
    // console.log("router",router)
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
          createBoardInput:{
          writer,
          password,
          title,
          contents,
          youtubeUrl,
          boardAddress:{
            zipcode,
            address,
            addressDetail
          }
        }}
      });
      console.log("result", result)

      if (writer !== "" && password !== "" && title !== "" && contents !== "") {
        Modal.success({content: "게시물 등록에 성공했습니다!! 상세페이지로 이동합니다!"})

      }

      router.push(`/boards/${result.data.createBoard._id}`);
    } catch (error) {}
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (
      writer !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (
      writer !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (
      writer !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };


  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  }



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
    setData(data.address)
    setZipcode(data.zonecode)
    setIsOpen(false);
  }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
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
      date={date}
      zipcode={zipcode}
      boardAddress={boardAddress}
      address={address}
      addressDetail={addressDetail}



    />
  );
}
