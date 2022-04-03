import { getDate } from "../../../commons/libraries/utils";
import * as s from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import ReactPlayer from 'react-player'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tooltip, Button } from 'antd';





export default function BoardDetailUI(props: IBoardDetailUIProps) {

  const text = <span> {props.data?.fetchBoard.boardAddress.address}<br />
                    {props.data?.fetchBoard.boardAddress.addressDetail}</span>;


  const buttonWidth = 60;
  const color ='gold'


  return (
    <s.BodyHTML>
      <s.Container>
        <s.ContentsContainer>
          <s.Header>
            <s.HeaderDiv>
                <s.InfoDiv>
                  <Avatar size="large" icon={<UserOutlined />} />
                  <s.InfoText>
                    <s.Writer>{props.data?.fetchBoard.writer}</s.Writer>
                    <s.Date>
                      Date : {getDate(props.data?.fetchBoard.updatedAt)}
                    </s.Date>
                  </s.InfoText>
                </s.InfoDiv>
              </s.HeaderDiv>
              <s.HeaderTopDiv>
                  <Button  icon={<s.LinkIcon  style={{ width: buttonWidth, marginRight: 10, border: 0}}></s.LinkIcon> }></Button>

              <s.LocationDiv color={color} key={color}>
                <Tooltip placement="topRight" title={text}>
                  <Button  icon={<s.LocationIcon  style={{ width: buttonWidth, marginRight: 10 }}></s.LocationIcon> }></Button>
                </Tooltip>
              </s.LocationDiv>
            </s.HeaderTopDiv>

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
                  <s.LikeIcon onClick={props.onClickLikeUp}/>
                  <s.LikeNum>{props.data?.fetchBoard.likeCount}</s.LikeNum>
                </s.LikeDiv>

                <s.LikeDiv>
                  <s.DisLikeIcon  onClick={props.onClickDislikeUp} />
                  <s.DisLikeNum>{props.data?.fetchBoard.dislikeCount}</s.DisLikeNum>
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
