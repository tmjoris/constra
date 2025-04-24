import axios from "axios";

const AirtimeInstance = async () => {

return axios.create({
baseURL: 'https://api.africastalking.com',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/x-www-form-urlencoded',
'apiKey': process.env.AfricasTalkingApiKey
},
data : {'username' : 'bambaCredo'}
})
}

const sendAirtime = async (phone,amount) => {
    let request = await AirtimeInstance();
    return request.post('version1/airtime/send', {
    username : process.env.AfricasTalkingUsername,
    maxNumRetry: 2,
    recipients : JSON.stringify([{phoneNumber: phone, amount: `KES ${amount}`}])
})};


export default sendAirtime