import PixivAppApi from 'pixiv-app-api'

const PixivLogin = async () => {
  const tmp = new PixivAppApi(process.env.PIXIV_USERNAME, process.env.PIXIV_PASSWORD)
  await tmp.login()
  return tmp
}

const Pixiv = PixivLogin()
export default Pixiv
