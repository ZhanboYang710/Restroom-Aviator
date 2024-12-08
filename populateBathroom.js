var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
var MongoClient = require("mongodb").MongoClient;
var dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
var MONGO_URI = process.env.MONGO_URI;
var DB_NAME = "cs391-final-projects";
var RESTROOMS_COLLECTION = "restroom_aviator";
var client = new MongoClient(MONGO_URI);
function populateBathrooms() {
    return __awaiter(this, void 0, void 0, function () {
        var db, collection, bathrooms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    db = client.db(DB_NAME);
                    collection = db.collection(RESTROOMS_COLLECTION);
                    bathrooms = [
                        {
                            location: "Second Floor near Dish Area",
                            building: "Marciano",
                            floor: 2,
                            campus: "East",
                            gender: "Men",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Near Water Refill past Security",
                            building: "Warren Dining Hall",
                            floor: 1,
                            campus: "Central",
                            gender: "Men",
                            accessible: false,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Across from C Tower Elevators",
                            building: "Warren Dining Hall",
                            floor: 1,
                            campus: "Central",
                            gender: "Women",
                            accessible: false,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Right when Entering Building",
                            building: "Sleeper",
                            floor: 1,
                            campus: "West",
                            gender: "Gender Neutral",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "First and Second Floors near Open Stairs",
                            building: "Photonics",
                            floor: 1,
                            campus: "South",
                            gender: "Men",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Back of the Building, Near Long Hallway",
                            building: "CGS",
                            floor: 1,
                            campus: "Central",
                            gender: "Men",
                            accessible: false,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Near Large Conference Room",
                            building: "CILSE",
                            floor: 1,
                            campus: "East",
                            gender: "Women",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "To the Right of the Entrance",
                            building: "LSEB",
                            floor: 1,
                            campus: "East",
                            gender: "Men",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Basement Floor",
                            building: "ENG",
                            floor: -1,
                            campus: "Central",
                            gender: "Gender Neutral",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "First Floor at the Back",
                            building: "GSU",
                            floor: 1,
                            campus: "Central",
                            gender: "Women",
                            accessible: false,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "Second Floor Near Left or Right Turn",
                            building: "GSU",
                            floor: 2,
                            campus: "Central",
                            gender: "Men",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                        {
                            location: "First Floor, Next to the Stairs",
                            building: "Questrom",
                            floor: 1,
                            campus: "East",
                            gender: "Gender Neutral",
                            accessible: true,
                            ratings: { odor: 0, cleanliness: 0, privacy: 0, overall: 0 },
                            ratingCount: 0,
                            reviews: [],
                        },
                    ];
                    return [4 /*yield*/, collection.insertMany(bathrooms)];
                case 2:
                    _a.sent();
                    console.log("Bathrooms populated!");
                    return [4 /*yield*/, client.close()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
populateBathrooms().catch(function (err) { return console.error("Failed to populate bathrooms:", err); });
