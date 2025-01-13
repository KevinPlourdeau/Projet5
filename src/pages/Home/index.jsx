import data from '@datas/logements.json'

function Home() {
  return (
    <section className="main">
      <div className="main__home1">
        <h1 className="main__home1__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="main__home2">
        {data.map((item) => (
          <div key={item.id} className="main__home2__card">
            <img
              src={item.cover}
              alt={item.title}
              className="main__home2__card__image"
            />
            <div className="main__home2__card__overlay">
              <h2 className="main__home2__card__overlay__title">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Home
