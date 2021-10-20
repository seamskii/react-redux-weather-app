// export const apiKey='jDxJ2sRCtvYEJjKU5MLbLl6GqjiXsAvu';

function mockApiCity(){
    const cityData=[
        {
        "Version": 1,
        "Key": "213181",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Haifa",
        "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
        "ID": "HA",
        "LocalizedName": "Haifa"
        }
        },
        {
        "Version": 1,
        "Key": "2589281",
        "Type": "City",
        "Rank": 85,
        "LocalizedName": "Haifang Township",
        "Country": {
        "ID": "CN",
        "LocalizedName": "China"
        },
        "AdministrativeArea": {
        "ID": "SD",
        "LocalizedName": "Shandong"
        }
        }
        ]
return cityData;
}

export default mockApiCity;