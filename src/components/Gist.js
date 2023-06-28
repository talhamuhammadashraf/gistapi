import PropTypes from "prop-types";
import React, { memo } from "react";
import Octicon from "react-octicon";
import styled from "styled-components";
import moment from "moment";

const InfoItem = ({ icon, count: num, info }) => {
  const count = isNaN(num) ? 0 : parseInt(num);
  return (
    <Row>
      <Octicon className="octIcon" name={icon} />
      {count !== 0 && <Count>{count}</Count>}
      <Name>{info}</Name>
    </Row>
  );
};

InfoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number,
  info: PropTypes.string.isRequired,
};

const Files = ({ files }) =><FileContainer>
  {Object.values(files).map(({ raw_url, filename }, idx) => (
    <FileItem key={idx}>
      <Octicon className="octIcon" name="file-text" />
      <Link href={raw_url} target="_blank">
        {filename}
      </Link>
    </FileItem>
  ))}</FileContainer>

File.propTypes = {
  file: PropTypes.object.isRequired,
};

const Gist = ({ gist }) => {
  const { owner } = gist;
  return (
    <div className="gist">
      <SpreadRow>
        <Row>
          <img alt="avatar" src={owner?.avatar_url} className="avatar" />
          <Name>{owner?.login}</Name>
        </Row>
        <Row>
          <InfoItem
            info="Files"
            count={Object.entries(gist?.files)?.length}
            icon="code"
          />
          <InfoItem info="Forks" icon="git-branch" />
          <InfoItem info="comments" count={gist?.comments} icon="comment" />
          <InfoItem info="Stars" icon="star" />
        </Row>
      </SpreadRow>

      <Row>
        <Date>Created at: {moment(gist?.created_at).format("MM/DD/YYYY")}</Date>
        <Date>Updated at: {moment(gist?.updated_at).format("MM/DD/YYYY")}</Date>
      </Row>

      <Description>{gist?.description}</Description>
      <br />
      <Files files={gist?.files} />
    </div>
  );
};

Gist.propTypes = {
  gist: PropTypes.object.isRequired,
};

const FileContainer = styled.div`
padding-left:8px;
display:flex;
flex-wrap:wrap
`

const Date = styled.span`
  font-size: 11px;
  margin-right: 10px;
  padding-top: 6px;
`;
const Description = styled.span`
  font-size: 13px;
  padding-top: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: blue;
  font-size: 12px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
`;
const FileItem = styled.span`
  margin-top: 5px;
  margin-right: 8px;
`;
const SpreadRow = styled(Row)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  font-size: 14px;
  color: blue;
  margin-left: 4px;
  margin-right: 4px;
`;
const Count = styled.span`
  font-size: 14px;
  color: blue;
  margin-left: 4px;
  margin-right: 4px;
`;

export default memo(Gist);
