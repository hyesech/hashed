// plain text 입력
const inputElem = document.querySelector('#plain-input');
const hashedList = document.querySelector('#hashed-list');

// 버튼 클릭 시 업로드
const hashBtn = document.querySelector('#hash-button');
hashBtn.addEventListener('click', () => {
    uploadHashedText();
    inputElem.value = '';
});

// 리스트 등록
const uploadHashedText = () => {
    const newHashedTextElem = document.createElement('li', inputElem.value);
    newHashedTextElem.textContent = inputElem.value;

    newHashedTextElem.append(generateDeleteButton());
    hashedList.append(newHashedTextElem);
};

// 삭제 버튼 생성 함수
const generateDeleteButton = () => {
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.innerText = 'X';

    // 버튼에 삭제 기능 추가
    deleteBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });

    return deleteBtn;
};

// Hashing
// const generateHashedText = (plainText) => {
//     console.log('plainText', plainText);
//     const hashedText = plainText;

//     return hashedText;
// };
