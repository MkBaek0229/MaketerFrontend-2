import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Service = () => {
  const [spicyLevel, setSpicyLevel] = useState(0);
  const [bitterLevel, setBitterLevel] = useState(0);
  const [saltLevel, setSaltLevel] = useState(0);
  const [sweetLevel, setSweetLevel] = useState(0);

  const [spicyTaste, setSpicyTaste] = useState({
    Likespicy: false,
    Sosospicy: false,
    Unlikespicy: false,
  });

  const [bitterTaste, setBitterTaste] = useState({
    Likebitter: false,
    Sosobitter: false,
    Unlikebitter: false,
  });

  const [saltTaste, setSaltTaste] = useState({
    Likesalt: false,
    Sososalt: false,
    Unlikesalt: false,
  });

  const [sweetTaste, setSweetTaste] = useState({
    Likesweet: false,
    sososweet: false,
    Unlikesweet: false,
  });

  const Checker = (e) => {
    e.preventDefault();
    console.log(spicyLevel, bitterLevel, saltLevel, sweetLevel);

    if (spicyLevel == 3) {
      console.log("매운맛을 매우 좋아하는 사람");
      setSpicyTaste({
        Likespicy: true,
        Sosospicy: false,
        Unlikespicy: false,
      });
    } else if (spicyLevel == 2) {
      console.log("매운맛을 싫어하지도 좋아하지도 않는 사람");
      setSpicyTaste({
        Likespicy: false,
        Sosospicy: true,
        Unlikespicy: false,
      });
    } else {
      console.log("매운맛을 싫어하는 사람");
      setSpicyTaste({
        Likespicy: false,
        Sosospicy: false,
        Unlikespicy: true,
      });
    }

    if (bitterLevel == 3) {
      console.log("쓴맛을 매우 좋아하는 사람");
      setBitterTaste({
        Likebitter: true,
        Sosobitter: false,
        Unlikebitter: false,
      });
    } else if (bitterLevel == 2) {
      console.log("쓴맛을 싫어하지도 좋아하지도 않는 사람");
      setBitterTaste({
        Likebitter: false,
        Sosobitter: true,
        Unlikebitter: false,
      });
    } else {
      console.log("쓴맛을 싫어하는 사람");
      setBitterTaste({
        Likebitter: false,
        Sosobitter: false,
        Unlikebitter: true,
      });
    }

    if (saltLevel == 3) {
      console.log("짠맛을 매우 좋아하는 사람");
      setSaltTaste({
        Likesalt: true,
        Sososalt: false,
        Unlikesalt: false,
      });
    } else if (saltLevel == 2) {
      console.log("짠맛을 싫어하지도 좋아하지도 않는 사람");
      setSaltTaste({
        Likesalt: false,
        Sososalt: true,
        Unlikesalt: false,
      });
    } else {
      console.log("짠맛을 싫어하는 사람");
      setSaltTaste({
        Likesalt: false,
        Sososalt: false,
        Unlikesalt: true,
      });
    }

    if (sweetLevel == 3) {
      console.log("단맛을 매우 좋아하는 사람");
      setSweetTaste({
        Likesweet: true,
        sososweet: false,
        Unlikesweet: false,
      });
    } else if (sweetLevel == 2) {
      console.log("단맛을 좋아하지도 싫어하지도 않는 사람");
      setSweetTaste({
        Likesweet: false,
        sososweet: true,
        Unlikesweet: false,
      });
    } else {
      console.log("단맛을 싫어하는 사람");
      setSweetTaste({
        Likesweet: false,
        sososweet: false,
        Unlikesweet: true,
      });
    }
  };

  console.log(spicyTaste);
  console.log(bitterTaste);
  console.log(saltTaste);
  console.log(sweetTaste);
  
  return (
    <>
      <div className="screen1">
        <div>
          <h1>좋아하는 맛 선호도 검사 테스트</h1>
        </div>
        <div>
          <h2>대충 설명글</h2>
        </div>
        <button>검사하기</button>
      </div>

      <div className="screen2">
        <div>
          <h1>
            사용자님께서 좋아하는 맛을 확인하기 위해 몇가지 설문조사를 하도록
            하겠습니다.
          </h1>
        </div>
        <div>
          <form action="">
            <Fildset>
              <fieldset>
                <legend>
                  질문 1: 배가 고파 컵라면을 먹으려고합니다. 어떤 컵라면을
                  드시겠습니까?
                </legend>

                <div>
                  <input
                    type="radio"
                    id="survey1-1"
                    name="survey1"
                    onClick={() => {
                      setSpicyLevel(2);
                    }}
                    checked
                  />
                  <label htmlFor="survey1-1">1. 육개장 사발면</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="survey1-2"
                    name="survey1"
                    onClick={() => {
                      setSpicyLevel(1);
                    }}
                  />
                  <label htmlFor="survey1-2">2. 비빔면</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="survey1-3"
                    name="survey1"
                    onClick={() => {
                      setSpicyLevel(3);
                    }}
                  />
                  <label htmlFor="survey1-3">3. 불닭볶음면</label>
                  <p>사용자 선호하는 매운맛 레벨 : {spicyLevel}</p>
                </div>
              </fieldset>
            </Fildset>

            <Fildset>
              <fieldset>
                <legend>
                  질문 2: 주말에 카페에서 시간을 보내려고 합니다. 어떤 음료를
                  주문하시겠습니까?
                </legend>

                <div>
                  <input
                    type="radio"
                    id="survey2-1"
                    name="survey2"
                    onClick={() => {
                      setBitterLevel(3);
                    }}
                  />
                  <label htmlFor="survey2-1">1. 아메리카노</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="survey2-2"
                    name="survey2"
                    onClick={() => {
                      setBitterLevel(2);
                    }}
                  />
                  <label htmlFor="survey2-2">2. 카페라떼</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="survey2-3"
                    name="survey2"
                    onClick={() => {
                      setBitterLevel(1);
                    }}
                  />
                  <label htmlFor="survey2-3">3. 아이스티</label>
                </div>
                <p>사용자 선호하는 쓴맛 레벨 : {bitterLevel}</p>
              </fieldset>
            </Fildset>

            <Fildset>
              <fieldset>
                <legend>
                  질문 3: 영화를 보러갈 때 간식으로 무엇을 선호하시나요?
                </legend>

                <div>
                  <input
                    type="radio"
                    id="survey3-1"
                    name="survey3"
                    onClick={() => {
                      setSaltLevel(1);
                    }}
                  />
                  <label htmlFor="survey3-1">1. 팝콘</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="survey3-2"
                    name="survey3"
                    onClick={() => {
                      setSaltLevel(2);
                    }}
                  />
                  <label htmlFor="survey3-2">2. 나쵸</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="survey3-3"
                    name="survey3"
                    onClick={() => {
                      setSaltLevel(3);
                    }}
                  />
                  <label htmlFor="survey3-3">3. 핫도그</label>
                </div>

                <p>사용자 선호하는 짠맛 레벨 : {saltLevel}</p>
              </fieldset>
            </Fildset>

            <Fildset>
              <fieldset>
                <legend>
                  질문 4: 브런치 카페에 갔을 때 어떤 브런치를 선호하시나요?
                </legend>

                <div>
                  <input
                    type="radio"
                    id="survey4-1"
                    name="survey4"
                    onClick={() => {
                      setSweetLevel(1);
                    }}
                  />
                  <label htmlFor="survey4-1">1. 프렌치 토스트</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="survey4-2"
                    name="survey4"
                    onClick={() => {
                      setSweetLevel(3);
                    }}
                  />
                  <label htmlFor="survey4-2">2. 베리 팬케이크</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="survey4-3"
                    name="survey4"
                    onClick={() => {
                      setSweetLevel(2);
                    }}
                  />
                  <label htmlFor="survey4-3">3. 와플</label>
                </div>
                <p>사용자 선호하는 단맛 레벨 : {sweetLevel}</p>
              </fieldset>
            </Fildset>
            <button onClick={(e) => Checker(e)}>최종 검사</button>
          </form>
        </div>
      </div>

      <div className="screen3">
        <h1>당신은 ``맛을 좋아하는 사용자 입니다.</h1>
        <button>관련 식당 조회하기</button>
      </div>
    </>
  );
};
export default Service;

const Fildset = styled.div`
  max-width: 1000px;
  max-height: 100vh;
  margin-bottom: 18px;
`;
