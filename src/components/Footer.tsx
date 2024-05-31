export function Footer() {
  return (
    <div className={'fixed w-full bottom-12 flex justify-center'}>
      <a
        href="intent://#Intent;package=snowingfox.book.app;end"
        className={
          'bg-primary text-white text-sm rounded-full px-4 py-2 shadow-lg shadow-primary'
        }
      >
        在App内打开
      </a>
    </div>
  )
}
