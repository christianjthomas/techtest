const { Builder, By } = require("selenium-webdriver");
require("chromedriver");
const chai = require("chai");

let expect = chai.expect;

let baseUrl = "https://github.com/"
let userID = "6wl"

let driver = new Builder().forBrowser("chrome").build();

describe("Check user details displayed on gitgub", async function () {

    it("should find name 'Gregory Loscombe' on the page", async function () {
        await driver.get(baseUrl + userID);
        let name = await driver.findElement(By.className("p-name vcard-fullname d-block overflow-hidden")).getText();
        expect(name).to.equal("Gregory Loscombe");
    });

    it("should find location 'Manchester' on the page", async function () {
        let location = await driver.findElement(By.className("p-label")).getText();
        expect(location).to.equal("Manchester");
    });

    it("should find number of public repos on the page", async function () {
        let publicRepos = await driver.findElement(By.xpath("//*[@id='js-pjax-container']/div[1]/div/div/div[2]/div/nav/a[2]/span")).getText();
        expect(publicRepos).to.equal("7");
    });

    it("should find number of followers on the page", async function () {
        let followers = await driver.findElement(By.xpath("//*[@id='js-pjax-container']/div[2]/div/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/a[1]/span")).getText();
        expect(followers).to.equal("13")
    });

    it("should find number of following on the page", async function () {
        let following = await driver.findElement(By.xpath("//*[@id='js-pjax-container']/div[2]/div/div[1]/div/div[2]/div[2]/div[2]/div[2]/div/a[2]/span")).getText();
        expect(following).to.equal("29")
    });

    // gists done appear to be on the mainp page? - I'm not familiar with the github website.
    it("should find number of public gists on the page", async function () {
        await driver.get("https://gist.github.com/6wl")
        let publicGists = await driver.findElement(By.xpath("//*[@id='gist-pjax-container']/div[2]/div/div[2]/div[1]/nav/div[1]/a[1]/span")).getText();
        expect(publicGists).to.equal("11");
        await driver.quit();
    });

});
