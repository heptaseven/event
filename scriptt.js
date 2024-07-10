document.addEventListener('DOMContentLoaded', function() {
  const events = JSON.parse(localStorage.getItem('events') || '[]');
  const eventsContainer = document.querySelector('.events');

  events.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.className = 'event';
    eventElement.innerHTML = `
      <div class="title">
        <i class="icon"></i>
        <div class="event-title">${event.title}</div>
      </div>
      <div class="event-time">${event.time}</div>
    `;
    eventsContainer.appendChild(eventElement);
  });

  const addEventBtn = document.querySelector('.add-event-btn');
  const addEventInputTitle = document.querySelector('.add-event-input input[placeholder="Event Title"]');
  const addEventInputTime = document.querySelector('.add-event-input input[placeholder="Event Time"]');

  addEventBtn.addEventListener('click', function() {
    const title = addEventInputTitle.value;
    const time = addEventInputTime.value;
    const event = { title, time };

    localStorage.setItem('events', JSON.stringify([...events, event]));
    alert('Event added successfully!');
    window.location.reload();
  });
});
