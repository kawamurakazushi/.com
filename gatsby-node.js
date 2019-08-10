"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
exports.__esModule = true;
var apollo_boost_1 = require("apollo-boost");
var decoders_1 = require("decoders");
var gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
var node_fetch_1 = require("node-fetch");
var graphql_tag_1 = require("graphql-tag");
var path = require("path");
exports.onCreateNode = function (_a) {
    var node = _a.node, getNode = _a.getNode, actions = _a.actions;
    var createNodeField = actions.createNodeField;
    if (node.internal.type === "MarkdownRemark") {
        var slug = gatsby_source_filesystem_1.createFilePath({ node: node, getNode: getNode, basePath: "pages" });
        createNodeField({
            name: "slug",
            node: node,
            value: slug
        });
    }
};
exports.sourceNodes = function (_a) {
    var actions = _a.actions, createNodeId = _a.createNodeId, createContentDigest = _a.createContentDigest;
    return __awaiter(_this, void 0, void 0, function () {
        var createNode, nodes;
        var _this = this;
        return __generator(this, function (_b) {
            require("dotenv").config();
            createNode = actions.createNode;
            nodes = [
                "spice-blending-puzzle",
                "seo-editor",
                "figma-map-maker",
                "figma-walker",
                "figma-format",
                "figma-sort-it",
                "vscode-grep",
            ].map(function (p) { return __awaiter(_this, void 0, void 0, function () {
                var client, d, decode, data, nodeData, nodeMeta;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            client = new apollo_boost_1["default"]({
                                fetch: node_fetch_1["default"],
                                headers: {
                                    Authorization: "Bearer " + process.env.GITHUB_API_KEY
                                },
                                uri: "https://api.github.com/graphql"
                            });
                            return [4 /*yield*/, client.query({
                                    query: graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        query Repository($name: String!) {\n          repository(owner: \"kawamurakazushi\", name: $name) {\n            name\n            description\n            url\n            object(expression: \"master:README.md\") {\n              ... on Blob {\n                text\n              }\n            }\n            languages(first: 5) {\n              edges {\n                node {\n                  name\n                  color\n                }\n              }\n            }\n          }\n        }\n      "], ["\n        query Repository($name: String!) {\n          repository(owner: \"kawamurakazushi\", name: $name) {\n            name\n            description\n            url\n            object(expression: \"master:README.md\") {\n              ... on Blob {\n                text\n              }\n            }\n            languages(first: 5) {\n              edges {\n                node {\n                  name\n                  color\n                }\n              }\n            }\n          }\n        }\n      "]))),
                                    variables: { name: p }
                                })];
                        case 1:
                            d = _a.sent();
                            decode = decoders_1.guard(decoders_1.object({
                                repository: decoders_1.object({
                                    description: decoders_1.string,
                                    languages: decoders_1.object({
                                        edges: decoders_1.array(decoders_1.object({ node: decoders_1.object({ name: decoders_1.string, color: decoders_1.string }) }))
                                    }),
                                    name: decoders_1.string,
                                    object: decoders_1.object({ text: decoders_1.string }),
                                    url: decoders_1.string
                                })
                            }));
                            data = decode(d.data);
                            nodeData = {
                                description: data.repository.description,
                                languages: data.repository.languages.edges.map(function (_a) {
                                    var node = _a.node;
                                    return node;
                                }),
                                name: data.repository.name,
                                readme: data.repository.object.text,
                                url: data.repository.url
                            };
                            nodeMeta = {
                                children: [],
                                id: createNodeId("project/" + p),
                                internal: {
                                    content: JSON.stringify(nodeData),
                                    contentDigest: createContentDigest(nodeData),
                                    type: "project"
                                },
                                parent: null
                            };
                            return [2 /*return*/, __assign({}, nodeData, nodeMeta)];
                    }
                });
            }); });
            return [2 /*return*/, new Promise(function (resolve, _) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, _a, node;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _i = 0;
                                return [4 /*yield*/, Promise.all(nodes)];
                            case 1:
                                _a = _b.sent();
                                _b.label = 2;
                            case 2:
                                if (!(_i < _a.length)) return [3 /*break*/, 4];
                                node = _a[_i];
                                createNode(node);
                                _b.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 2];
                            case 4:
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
};
exports.createPages = function (_a) {
    var graphql = _a.graphql, actions = _a.actions;
    var createPage = actions.createPage;
    return new Promise(function (resolve, _) {
        graphql("\n      {\n        allMarkdownRemark {\n          edges {\n            node {\n              fields {\n                slug\n              }\n            }\n          }\n        }\n        allProject {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    ").then(function (result) {
            var decode = decoders_1.guard(decoders_1.object({
                allMarkdownRemark: decoders_1.object({
                    edges: decoders_1.array(decoders_1.object({ node: decoders_1.object({ fields: decoders_1.object({ slug: decoders_1.string }) }) }))
                }),
                allProject: decoders_1.object({
                    edges: decoders_1.array(decoders_1.object({
                        node: decoders_1.object({
                            id: decoders_1.string,
                            name: decoders_1.string
                        })
                    }))
                })
            }));
            var data = decode(result.data);
            data.allMarkdownRemark.edges.forEach(function (_a) {
                var node = _a.node;
                createPage({
                    component: path.resolve("./src/templates/blog.tsx"),
                    context: {
                        slug: node.fields.slug
                    },
                    path: node.fields.slug
                });
            });
            data.allProject.edges.forEach(function (_a) {
                var node = _a.node;
                createPage({
                    component: path.resolve("./src/templates/project.tsx"),
                    context: {
                        id: node.id
                    },
                    path: node.name
                });
            });
            resolve();
        });
    });
};
var templateObject_1;
