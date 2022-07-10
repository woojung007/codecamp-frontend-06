import UsedItemDetail from '../../../src/components/units/market/detail/UsedItemDetail.container';
import CommentList from '../../../src/components/units/market/comment/commentList/CommentList.container';
import CommentWrite from '../../../src/components/units/market/comment/commentWrite/CommentWrite.container';


export default function UsedItemDetailPage() {
  return (
    <>
      <UsedItemDetail />
      <CommentWrite isEdit={false} />
      <CommentList />
    </>
  );
}
