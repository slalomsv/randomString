# Random String Generator

A simple app that generates pseudo-random alphanumeric string of user-defined length.

## Details

```
GET Request  --> AWS API Gateway -->
                                    |
                                    |
                            AWS Lambda function
                          Generates random string
                                    |
                                    |
GET Response <-- AWS API Gateway <--
```

