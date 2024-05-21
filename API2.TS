import express, { Request, Response } from "npm:express@4.19.2";
import axios from "npm:axios@1.6.8";

const app = express();

app.get("/:mat", async (req: Request, res: Response) => {
  try {
    console.log("127.0.0.1:3000  [GET] Received request");
    const matricula = req.params.mat;
    const apiUrl = `https://2sq7c2ojwjcevkft3hv6uspfqq.appsync-api.eu-west-3.amazonaws.com/graphql`;

    const headers = {
      "Host": "2sq7c2ojwjcevkft3hv6uspfqq.appsync-api.eu-west-3.amazonaws.com",
      "Accept": "*/*",
      "apollographql-client-version": "1.0",
      "x-amz-user-agent": "aws-amplify/3.0.7 react-native",
      "Accept-Language": "en-GB,en;q=0.9",
      "x-api-key": "da2-5qw4535jhbbmzaslbspbpxcsma",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "User-Agent": "autoficha/6 CFNetwork/1496.0.7 Darwin/23.5.0",
      "Connection": "keep-alive",
      "apollographql-client-name": "Autoficha Mobile",
    };

    const body = {
      operationName: "GetInfoVehiculo",
      variables: {
        id: `P-${matricula}`,
        nativeAds: {
          app: "autoficha",
          platform: "ios",
        },
      },
      query: `
        query GetInfoVehiculo($id: String!, $nativeAds: InputNativeAds) {
          getInfoVehiculo(id: $id, nativeAds: $nativeAds) {
            __typename
            ... on IHeader {
              title
              subtitle
              description
              image
              subtitle
              __typename
            }
            ... on IContent {
              title
              icon
              values {
                textColor
                backgroundColor
                value
                title
                __typename
              }
              __typename
            }
            ... on ITable {
              icon
              values {
                title
                textColor
                backgroundColor
                values {
                  textColor
                  backgroundColor
                  value
                  title
                  __typename
                }
                __typename
              }
              title
              __typename
            }
            ... on IAlert {
              __typename
              alert_type
              title
              description
              links {
                title
                value
                __typename
              }
            }
            ... on IImage {
              __typename
              type
              title
              img
            }
            ... on IThumbnail {
              image
              principalText
              title
              subtitle
              __typename
            }
            ... on IShare {
              message
              title
              __typename
            }
            ... on IBubbleGroup {
              __typename
              bubbles {
                backgroundColor
                icon
                iconColor
                inconType
                texts
                __typename
              }
            }
            ... on INativeAdsWrapper {
              __typename
              ads {
                contentText
                buttonText
                headerText
                img
                url
                __typename
              }
            }
            ... on IChipGroup {
              __typename
              chips {
                backgroundColor
                url
                title
                textColor
                icon
                __typename
              }
            }
          }
        }
      `,
    };

    const response = await axios.post(apiUrl, body, { headers });
    const apiData = response.data;
    console.log("127.0.0.1:3000  [GET] SUCCESS-200");
    res.status(200).send(apiData);
  } catch (e) {
    console.error("127.0.0.1:3000  [GET] FAILED-403", e.message);
    res.status(500).send(e.message);
  }
});

app.listen(3001, () => {
  console.log("Listening");
});
