export const time = `
<div class="buttons-container">
  <button class="button--inactive" id="time-calc">CLASES</button>
  <div class="button--active">TIEMPO</div>
</div>
<div class="time">
  <label for="hour-input">
    <h2>Tiempo para ver</h2>
  </label>
  <p class="time__text" id="time-inputs">
    <input
      type="number"
      placeholder="00"
      id="hours-input"
      class="time__input"
    />
    : <input type="number" placeholder="00" class="time__input" id="minutes-input"/> :
    <input type="number" placeholder="00" class="time__input" id="seconds-input"/>
  </p>
</div>
<div>
  <h2>Clases por ver</h2>
  <div class="scroll-container">
    <div class="classes-container" id="classes-container">
    <h1 style="text-align: center;">Ingresa tu tiempo disponible</h1>
    <p>Acá apareceran las clases que puedes ver en ese tiempo.</p>
    </div>
  </div>
</div>
`;
