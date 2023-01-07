export const time = `
<div class="buttons-container">
  <button class="button--inactive" id="time-calc">CLASES</button>
  <div class="button--active">TIEMPO</div>
</div>
<div class="time">
  <label for="hour-input">
    <h2>Tiempo para ver</h2>
  </label>
  <p class="time__text">
    <input
      type="number"
      placeholder="00"
      id="hour-input"
      class="time__input"
    />
    : <input type="number" placeholder="00" class="time__input" /> :
    <input type="number" placeholder="00" class="time__input" />
  </p>
</div>
<div>
  <h2>Clases por ver</h2>
  <div class="scroll-container">
    <div class="classes-container">
      <div class="class-wrapper">
        <div class="class__info">
          <p class="class__title">
            Un mensaje de bienvenida de Sytse, CEO de GitLab
          </p>
          <p class="class__completed">
            <span class="class__logo">
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="#98CA3F"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.95825 15L3.20825 10.25L4.39575 9.06252L7.95825 12.625L15.6041 4.97919L16.7916 6.16669L7.95825 15Z"
                  fill="#98CA3F"
                />
              </svg> </span
            >Completada
          </p>
          <p class="class__to-watch">
            <span class="class__logo">
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99992 3.75C5.83325 3.75 2.27492 6.34167 0.833252 10C2.27492 13.6583 5.83325 16.25 9.99992 16.25C14.1666 16.25 17.7249 13.6583 19.1666 10C17.7249 6.34167 14.1666 3.75 9.99992 3.75ZM9.99992 14.1667C7.69992 14.1667 5.83325 12.3 5.83325 10C5.83325 7.7 7.69992 5.83333 9.99992 5.83333C12.2999 5.83333 14.1666 7.7 14.1666 10C14.1666 12.3 12.2999 14.1667 9.99992 14.1667ZM9.99992 7.5C8.61659 7.5 7.49992 8.61667 7.49992 10C7.49992 11.3833 8.61659 12.5 9.99992 12.5C11.3833 12.5 12.4999 11.3833 12.4999 10C12.4999 8.61667 11.3833 7.5 9.99992 7.5Z"
                  fill="#EFF3F8"
                />
              </svg> </span
            >Por ver
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`;