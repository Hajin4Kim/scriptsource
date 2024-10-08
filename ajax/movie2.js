const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 구한 날짜를 화면에 보여주기
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth() + 1; // 이건 아래와 별개로 항상 당월을 구하려면 +1 해야한다
  let day = now.getDate() - 1; // 일별 박스 오피스 1~10위 조회 : 전날짜로 조회

  txtYear.value = year;
  // TODO: value 값으로 10 이하의 날짜들은 앞에 0102 이런식으로 표현했기 때문에 오류 방지하기 위한 조건문
  //selMon.value = month;
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
};
init();

getMovie = () => {
  // 선택된 년, 월, 일 가져오기
  let selectedDate = txtYear.value + selMon.value + selDay.value;
  // console.log("selectedDate", selectedDate);

  // url
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=${selectedDate}`;
  // console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("주소 확인!!");
      return response.json();
    })
    .then((json) => {
      // console.log(json.boxOfficeResult.dailyBoxOfficeList);
      const movies = json.boxOfficeResult.dailyBoxOfficeList;
      let str = "<tr>";

      movies.forEach((movie) => {
        // 순위 격차 표시
        if (movie.rankInten > 0) {
          movie.rankInten = "▲" + movie.rankInten;
        } else if (movie.rankInten < 0) {
          movie.rankInten = "▼" + movie.rankInten;
        } else {
          movie.rankInten;
        }
        // str += `<p>${movie.rank} 위(${rankInten}) : ${movie.movieNm}</p>`;
        str += `<tr>`;
        str += `<td>${movie.rank} 위</td>`;
        str += `<td>(${movie.rankInten})</td>`;
        str += `<td>${movie.movieNm}</td>`;
        str += `<td>${movie.openDt}</td>`;
        str += `<td>${movie.audiCnt}</td>`;
        str += `<td>${movie.audiAcc}</td>`;
        str += `</tr>`;
      });
      str += "</tr>";
      document.querySelector(".table tbody").innerHTML = str;
      //TODO: 조회와 동시, invisible 클래스명 제거
      document
        .querySelector(".container .row:nth-child(3)")
        .classList.remove("invisible");
    })
    .catch((error) => console.log(error));
};
document.querySelector(".btn-secondary").addEventListener("click", getMovie);
