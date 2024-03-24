export function Browse() {
  return (
    <section className="browse">
      <h2 className="browse__title title title--primary">
        BROWSE BY dress STYLE
      </h2>
      <div className="browse__wrapper">
        <img
          className="browse__img"
          src="./assets/images/browses/casual.svg"
          alt="casual"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/formal.svg"
          alt="formal"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/party.svg"
          alt="party"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/gym.svg"
          alt="gym"
        />
      </div>
      <div className="browse__wrapper-xxl">
        <img
          className="browse__img"
          src="./assets/images/browses/casual-desktop.svg"
          alt="casual-desktop"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/formal-desktop.svg"
          alt="formal-desktop"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/party-desktop.svg"
          alt="party-desktop"
        />
        <img
          className="browse__img"
          src="./assets/images/browses/gym-desktop.svg"
          alt="gym-desktop"
        />
      </div>
    </section>
  );
}
