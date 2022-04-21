// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// ssr: 서브사이드 렌더링
// React-Quill 을 import 하게 되는 시점을 document 가 선언된 시점 이후에 선언할 수 있게 해야한다

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
  };
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // onChange 됐다고 react-hook-form에 알려주는 기능!
  trigger("contents");
  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용 : <ReactQuill onChange={onChangeContents} />;
      <br />
      <button>등록하기</button>
    </div>
  );
}

// onChange는 만들어준 함수이다
