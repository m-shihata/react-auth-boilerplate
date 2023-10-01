import Nav from 'components/layout/nav'

function PrimaryLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Nav />
        <main>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}

export default PrimaryLayout
