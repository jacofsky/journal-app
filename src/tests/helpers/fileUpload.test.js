import 'setimmediate';
import cloudinary from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload"


cloudinary.config({ 
    cloud_name: 'djnsnatgp', 
    api_key: '955239375448951', 
    api_secret: 'p67txYFHg3U57CPHEUnNCuE8g84',
    secure: true
});

describe('Tests in fileUpload', () => {
    

    test('should load an archive and return an url', async() => {
        const resp = await fetch('https://media-exp1.licdn.com/dms/image/C560BAQFf6cNnacDA_g/company-logo_200_200/0/1558983522253?e=2159024400&v=beta&t=hwQnWauy2Z46YsefRmI2us-FkymwYvKWMbV4wCVnhEU')
        const blob = await resp.blob()


        const file = new File([blob], 'foto.png')

        const url = await fileUpload(file)

        expect(typeof url).toBe('string')

        
        const segmets = url.split('/')
        const imageId = segmets[segmets.length - 1].replace('.jpg', '')
        

        await cloudinary.api.delete_resources(imageId, {}, () => {});
    })

    test('should return an error', async() => {

        const file = new File([], 'foto.png')

        const url = await fileUpload(file)

        expect(url).toBe(null)
    })
    
})
