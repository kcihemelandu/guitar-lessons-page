import React from "react";
import { Container } from "../../styles/GlobalComponents";
import { PostImage } from "./../../assets/images";
import {
  NewsSection,
  NewsDivider,
  NewsTitle,
  NewsIntroText,
  NewsPosts,
  NewsVertPost,
  NewsHorizPosts,
  NewsPostText,
  NewsPostDivider,
  NewsHorizPost,
  VertContentFade,
  HorizContentFade,
  AllContainer,
  AllArticlesBtn,
} from "./LatestNews.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const LatestNews = () => {
  return (
    <NewsSection>
      <Container>
        <NewsTitle>LATEST NEWS</NewsTitle>

        <NewsDivider />

        <NewsIntroText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          mollitia quas possimus cupiditate quis ab eos, unde hic neque expedita
          non ipsam totam! Debitis, optio.
        </NewsIntroText>

        <NewsDivider />

        <NewsPosts>
          <VertContentFade left>
            <NewsVertPost>
              <img src={`${PostImage}`} alt="" />
              <NewsPostText>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <NewsPostDivider />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                sed pariatur ut praesentium nam exercitationem, numquam esse
                dignissimos! Minima, nam doloremque sequi iusto, magni libero
                laboriosam nostrum labore deserunt autem amet similique culpa id
                velit laudantium ad debitis inventore? Sequi!
              </NewsPostText>
            </NewsVertPost>
          </VertContentFade>

          <NewsHorizPosts>
            <HorizContentFade right>
              <NewsHorizPost>
                <img src={`${PostImage}`} alt="" />

                <NewsPostText>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>GUITAR LESSONS</span>
                  </span>
                </NewsPostText>
              </NewsHorizPost>
            </HorizContentFade>
            <HorizContentFade right>
              <NewsHorizPost>
                <img src={`${PostImage}`} alt="" />

                <NewsPostText>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>GUITAR LESSONS</span>
                  </span>
                </NewsPostText>
              </NewsHorizPost>
            </HorizContentFade>
            <HorizContentFade right>
              <NewsHorizPost>
                <img src={`${PostImage}`} alt="" />

                <NewsPostText>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faFolder} />
                    <span>GUITAR LESSONS</span>
                  </span>
                </NewsPostText>
              </NewsHorizPost>
            </HorizContentFade>
          </NewsHorizPosts>
        </NewsPosts>
        <AllContainer>
          <AllArticlesBtn to="/blog">All Articles</AllArticlesBtn>
        </AllContainer>
      </Container>
    </NewsSection>
  );
};

export default LatestNews;
