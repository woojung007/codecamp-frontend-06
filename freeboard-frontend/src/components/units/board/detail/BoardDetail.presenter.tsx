import { getDate } from "../../../commons/libraries/utils";
import * as s from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from 'react-player'

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <s.BodyHTML>
      <s.Container>
        <s.ContentsContainer>
          <s.Header>
            <s.LocationDiv id="showLocation">
              <s.IMG src="/location-kr.png" />
            </s.LocationDiv>
            <s.HeaderDiv>
              <s.InfoDiv>
                <s.IMG src="/user.png" />
                <s.InfoText>
                  <s.Writer>{props.data?.fetchBoard.writer}</s.Writer>
                  <s.Date>
                    Date : {getDate(props.data?.fetchBoard.updatedAt)}
                  </s.Date>
                </s.InfoText>
              </s.InfoDiv>

              <s.IconDiv>
                <s.LinkImg>
                  <s.IMG src="/link.png" />
                </s.LinkImg>
                <s.LocationImg>
                  <s.IMG src="/location.png" />
                </s.LocationImg>
              </s.IconDiv>
            </s.HeaderDiv>
          </s.Header>

          <s.Contents>
            <s.BoardDiv>
              <s.BoardTitle>{props.data?.fetchBoard.title}</s.BoardTitle>
            </s.BoardDiv>

            <s.BoardDiv>
              <s.BoardImage>BoardImage</s.BoardImage>
            </s.BoardDiv>

            <s.BoardDiv>
              <s.BoardContents>
                {props.data?.fetchBoard.contents}
              </s.BoardContents>
            </s.BoardDiv>

            <s.BoardDiv>
              {props.data?.fetchBoard.youtubeUrl &&(
                <ReactPlayer 
                url={props.data?.fetchBoard.youtubeUrl}
                width="486px" height="240px"
                className="react-player"
                muted={true} 
                playing={true} 
                loop={true} 
                />
              )}
            </s.BoardDiv>

            <s.BoardDiv>
              <s.BoardLike>
                <s.LikeDiv>
                  <s.LikeBtn onClick={props.onClickLikeUp}>
                    <s.IMG src="/like.png" />
                  </s.LikeBtn>
                  <s.LikeNum>{props.data?.fetchBoard.likeCount}</s.LikeNum>
                </s.LikeDiv>

                <s.LikeDiv>
                  <s.LikeBtn onClick={props.onClickDislikeUp}>
                    <s.IMG src="/unlike.png" />
                  </s.LikeBtn>
                  <s.DisLikeNum>
                    {props.data?.fetchBoard.dislikeCount}
                  </s.DisLikeNum>
                </s.LikeDiv>
              </s.BoardLike>
            </s.BoardDiv>
          </s.Contents>
        </s.ContentsContainer>

        <s.ButtonContainer>
          <s.BtnDiv>
            <s.GoBtn onClick={props.moveToList}>목록으로</s.GoBtn>

            <s.GoBtn onClick={props.moveToEdit}>수정하기</s.GoBtn>

            <s.GoBtn
              id={props.data?.fetchBoard._id}
              onClick={props.onClickDelete}
            >
              삭제하기
            </s.GoBtn>
          </s.BtnDiv>
        </s.ButtonContainer>
      </s.Container>
    </s.BodyHTML>
  );
}
