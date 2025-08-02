# Telemetry Team Second Training

## Running the preview

To start this project, make sure you're in the proper working directory by using `cd`:

```
# example

cd Recruit-Training/Telemetry-Recruit-Training/second-training
```

You can start the project by running:

```
yarn
# then
yarn dev
```

If you don't already have the yarn CLI (command line interface): https://classic.yarnpkg.com/en/docs/install#windows-stable

## Requirements

Fetch from an API and show a bunch of data using the `fetch` api and `useEffect` while showing the users on the preview.

Here is the link to actually show the users:

```
https://randomuser.me/api/?results=10&inc=name
```

This API should return some data with the form:

```
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Helder",
        "last": "Wielens"
      },
      "location": {
        "street": {
          "number": 3052,
          "name": "Alsacelaan"
        },
        "city": "Hilaard",
        "state": "Overijssel",
        "country": "Netherlands",
        "postcode": "7816 RG",
        "coordinates": {
          "latitude": "31.2494",
          "longitude": "-48.8367"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "helder.wielens@example.com",
      "login": {
        "uuid": "5fe405bc-fbe1-4a5b-a3f6-00a55bb86c09",
        "username": "whitekoala153",
        "password": "clean",
        "salt": "8T6fPuUN",
        "md5": "e315647e82e4339259ae4541a233827f",
        "sha1": "d58481f8396637f7721713cb05c174d3bac27fa5",
        "sha256": "c3ee4bfec704ba75b6ecf0981a2146d03ef1f40d0b54dbcc1f106083cba46d93"
      },
      "dob": {
        "date": "1948-01-27T16:01:19.406Z",
        "age": 77
      },
      "registered": {
        "date": "2015-09-15T04:55:31.327Z",
        "age": 9
      },
      "phone": "(0447) 897595",
      "cell": "(06) 67384756",
      "id": {
        "name": "BSN",
        "value": "65185506"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      },
      "nat": "NL"
    }
  ],
  "info": {
    "seed": "d60339a7ec631dfd",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
```

I want you to display these fields only of the person:

- Name (first and last)
- Gender
- Their address
- Email
- Phone Number
- Picture
- ID Value

It should look something like this:

![image](/Recruit-Training/Telemetry-Recruit-Training/third-training/public/exampleprofile.png)

There should also be a search bar at the top of the page to be able to search for users based on their full name.

Good LUCK!!!!!!!

PS. If you want to get familiar with the technologies that we use on the actual projects I will allow you to use:

- TailwindCSS / SaSS
