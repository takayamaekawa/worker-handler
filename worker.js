addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * リクエストされたホスト名が 'www.' で始まらない場合、
 * 'www.' を付けて同じパスにリダイレクトする。
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)

  // ホスト名が既に 'www.' で始まっている場合は何もしない
  // これにより www.www.maekawa.dev のような無限ループを防ぐ
  if (url.hostname.startsWith('www.')) {
    // 通常通りリクエストを処理
    return fetch(request)
  }

  // 'www.' を付けた新しいホスト名でURLを構築
  const targetUrl = `https://www.${url.hostname}${url.pathname}${url.search}`

  // 301（恒久的なリダイレクト）でリダイレクトを実行
  return Response.redirect(targetUrl, 301)
}
