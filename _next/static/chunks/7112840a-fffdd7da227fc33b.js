"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(H,r,d){d.d(r,{ET:function(){return hu},IO:function(){return hi},PL:function(){return hs},ad:function(){return gM},ar:function(){return hk},hJ:function(){return gK},oe:function(){return ht}});var k,a,I=d(25816),J=d(8463),s=d(53333),t=d(74444),K=d(43510),L=d(83454);let M="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class b{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}b.UNAUTHENTICATED=new b(null),b.GOOGLE_CREDENTIALS=new b("google-credentials-uid"),b.FIRST_PARTY=new b("first-party-uid"),b.MOCK_USER=new b("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let N="9.9.0",O=new s.Yd("@firebase/firestore");function P(){return O.logLevel}function Q(a,...b){if(O.logLevel<=s.in.DEBUG){let c=b.map(T);O.debug(`Firestore (${N}): ${a}`,...c)}}function R(a,...b){if(O.logLevel<=s.in.ERROR){let c=b.map(T);O.error(`Firestore (${N}): ${a}`,...c)}}function S(a,...b){if(O.logLevel<=s.in.WARN){let c=b.map(T);O.warn(`Firestore (${N}): ${a}`,...c)}}function T(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function U(b="Unexpected state"){let a=`FIRESTORE (${N}) INTERNAL ASSERTION FAILED: `+b;throw R(a),Error(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends t.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class Z{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,c){a.enqueueRetryable(()=>c(b.UNAUTHENTICATED))}shutdown(){}}class ${constructor(a){this.t=a,this.currentUser=b.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(b,c){let d=this.i,e=a=>this.i!==d?(d=this.i,c(a)):Promise.resolve(),f=new X;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new X,b.enqueueRetryable(()=>e(this.currentUser))};let a=()=>{let a=f;b.enqueueRetryable(async()=>{await a.promise,await e(this.currentUser)})},g=b=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=b,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new X)}},0),a()}getToken(){let b=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(a=>{var c;return this.i!==b?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?("string"==typeof a.accessToken||U(),new Y(a.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var c;let a=this.auth&&this.auth.getUid();return null===a||"string"==typeof a||U(),new b(a)}}class _{constructor(d,e,a){this.type="FirstParty",this.user=b.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);let c=d.auth.getAuthHeaderValueForFirstParty([]);c&&this.headers.set("Authorization",c),a&&this.headers.set("X-Goog-Iam-Authorization-Token",a)}}class aa{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new _(this.h,this.l,this.m))}start(a,c){a.enqueueRetryable(()=>c(b.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ab{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ac{constructor(a){this.g=a,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(a,b){let c=a=>{null!=a.error&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.p;return this.p=a.token,Q("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.g.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.g.getImmediate({optional:!0});a?d(a):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||U(),this.p=a.token,new ab(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function ad(d){let a="undefined"!=typeof self&&(self.crypto||self.msCrypto),b=new Uint8Array(d);if(a&&"function"==typeof a.getRandomValues)a.getRandomValues(b);else for(let c=0;c<d;c++)b[c]=Math.floor(256*Math.random());return b}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ae{static I(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/a.length)*a.length,b="";for(;b.length<20;){let d=ad(40);for(let c=0;c<d.length;++c)b.length<20&&d[c]<e&&(b+=a.charAt(d[c]%a.length))}return b}}function u(a,b){return a<b?-1:a>b?1:0}function af(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class ag{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return ag.fromMillis(Date.now())}static fromDate(a){return ag.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new ag(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?u(this.nanoseconds,a.nanoseconds):u(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class ah{constructor(a){this.timestamp=a}static fromTimestamp(a){return new ah(a)}static min(){return new ah(new ag(0,0))}static max(){return new ah(new ag(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class l{constructor(b,a,c){void 0===a?a=0:a>b.length&&U(),void 0===c?c=b.length-a:c>b.length-a&&U(),this.segments=b,this.offset=a,this.len=c}get length(){return this.len}isEqual(a){return 0===l.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof l?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(b){if(b.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==b.get(a))return!1;return!0}isImmediateParentOf(b){if(this.length+1!==b.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==b.get(a))return!1;return!0}forEach(b){for(let a=this.offset,c=this.limit();a<c;a++)b(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let f=Math.min(a.length,b.length);for(let c=0;c<f;c++){let d=a.get(c),e=b.get(c);if(d<e)return -1;if(d>e)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class ai extends l{construct(a,b,c){return new ai(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){let b=[];for(let a of c){if(a.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);b.push(...a.split("/").filter(a=>a.length>0))}return new ai(b)}static emptyPath(){return new ai([])}}let aj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ak extends l{construct(a,b,c){return new ak(a,b,c)}static isValidIdentifier(a){return aj.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ak.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ak(["__name__"])}static fromServerFormat(b){let h=[],f="",a=0,g=()=>{if(0===f.length)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);h.push(f),f=""},c=!1;for(;a<b.length;){let d=b[a];if("\\"===d){if(a+1===b.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+b);let e=b[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+b);f+=e,a+=2}else"`"===d?(c=!c,a++):"."!==d||c?(f+=d,a++):(g(),a++)}if(g(),c)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+b);return new ak(h)}static emptyPath(){return new ak([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class f{constructor(a){this.path=a}static fromPath(a){return new f(ai.fromString(a))}static fromName(a){return new f(ai.fromString(a).popFirst(5))}static empty(){return new f(ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===ai.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return ai.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new f(new ai(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class v{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function al(a){return a.fields.find(a=>2===a.kind)}function am(a){return a.fields.filter(a=>2!==a.kind)}v.UNKNOWN_ID=-1;class an{constructor(a,b){this.fieldPath=a,this.kind=b}}class ao{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new ao(0,ar.min())}}function ap(a,d){let b=a.toTimestamp().seconds,c=a.toTimestamp().nanoseconds+1,e=ah.fromTimestamp(1e9===c?new ag(b+1,0):new ag(b,c));return new ar(e,f.empty(),d)}function aq(a){return new ar(a.readTime,a.key,-1)}class ar{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new ar(ah.min(),f.empty(),-1)}static max(){return new ar(ah.max(),f.empty(),-1)}}function as(b,c){let a=b.readTime.compareTo(c.readTime);return 0!==a?a:0!==(a=f.comparator(b.documentKey,c.documentKey))?a:u(b.largestBatchId,c.largestBatchId)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(indexing): Remove this constant
let at="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function au(a){if(a.code!==V.FAILED_PRECONDITION||a.message!==at)throw a;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class av{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new av((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(b){try{let a=b();return a instanceof av?a:av.resolve(a)}catch(c){return av.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):av.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):av.reject(b)}static resolve(a){return new av((b,c)=>{b(a)})}static reject(a){return new av((c,b)=>{b(a)})}static waitFor(a){return new av((b,f)=>{let c=0,d=0,e=!1;a.forEach(a=>{++c,a.next(()=>{++d,e&&d===c&&b()},a=>f(a))}),e=!0,d===c&&b()})}static or(b){let a=av.resolve(!1);for(let c of b)a=a.next(a=>a?av.resolve(a):c());return a}static forEach(a,c){let b=[];return a.forEach((a,d)=>{b.push(c.call(this,a,d))}),this.waitFor(b)}static mapArray(a,b){return new av((f,g)=>{let d=a.length,h=Array(d),i=0;for(let c=0;c<d;c++){let e=c;b(a[e]).next(a=>{h[e]=a,++i===d&&f(h)},a=>g(a))}})}static doWhile(a,b){return new av((d,e)=>{let c=()=>{!0===a()?b().next(()=>{c()},e):d()};c()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class aw{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.T=new X,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{b.error?this.T.reject(new az(a,b.error)):this.T.resolve()},this.transaction.onerror=b=>{let c=aE(b.target.error);this.T.reject(new az(a,c))}}static open(b,a,c,d){try{return new aw(a,b.transaction(d,c))}catch(e){throw new az(a,e)}}get A(){return this.T.promise}abort(a){a&&this.T.reject(a),this.aborted||(Q("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new aB(b)}}class ax{constructor(a,b,c){this.name=a,this.version=b,this.P=c,12.2===ax.v(getUA())&&R("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return Q("SimpleDb","Removing database:",a),aC(window.indexedDB.deleteDatabase(a)).toPromise()}static V(){if(!isIndexedDBAvailable())return!1;if(ax.S())return!0;let a=getUA(),b=ax.v(a),d=0<b&&b<10,c=ax.D(a),e=0<c&&c<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||d||e)}static S(){var a;return void 0!==L&&"YES"===(null===(a=L.env)|| void 0===a?void 0:a.C)}static N(a,b){return a.store(b)}static v(b){let a=b.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=a?a[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static D(b){let a=b.match(/Android ([\d.]+)/i),c=a?a[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async k(a){return this.db||(Q("SimpleDb","Opening database:",this.name),this.db=await new Promise((c,d)=>{let b=indexedDB.open(this.name,this.version);b.onsuccess=a=>{let b=a.target.result;c(b)},b.onblocked=()=>{d(new az(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},b.onerror=c=>{let b=c.target.error;"VersionError"===b.name?d(new W(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===b.name?d(new W(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+b)):d(new az(a,b))},b.onupgradeneeded=a=>{Q("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let c=a.target.result;this.P.O(c,b.transaction,a.oldVersion,this.version).next(()=>{Q("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.M&&(this.db.onversionchange=a=>this.M(a)),this.db}F(a){this.M=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(b,g,h,i){let j="readonly"===g,c=0;for(;;){++c;try{this.db=await this.k(b);let d=aw.open(this.db,b,j?"readonly":"readwrite",h),e=i(d).next(a=>(d.R(),a)).catch(a=>(d.abort(a),av.reject(a))).toPromise();return e.catch(()=>{}),await d.A,e}catch(k){let a=k,f="FirebaseError"!==a.name&&c<3;if(Q("SimpleDb","Transaction failed with error:",a.message,"Retrying:",f),this.close(),!f)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ay{constructor(a){this.$=a,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(a){this.$=a}done(){this.B=!0}q(a){this.L=a}delete(){return aC(this.$.delete())}}class az extends null{constructor(a,b){super(V.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function aA(a){return"IndexedDbTransactionError"===a.name}class aB{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(Q("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(Q("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),aC(c)}add(a){return Q("SimpleDb","ADD",this.store.name,a,a),aC(this.store.add(a))}get(a){return aC(this.store.get(a)).next(b=>(void 0===b&&(b=null),Q("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return Q("SimpleDb","DELETE",this.store.name,a),aC(this.store.delete(a))}count(){return Q("SimpleDb","COUNT",this.store.name),aC(this.store.count())}K(b,c){let a=this.options(b,c);if(a.index||"function"!=typeof this.store.getAll){let d=this.cursor(a),e=[];return this.G(d,(b,a)=>{e.push(a)}).next(()=>e)}{let f=this.store.getAll(a.range);return new av((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}j(b,a){let c=this.store.getAll(b,null===a?void 0:a);return new av((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}W(b,c){Q("SimpleDb","DELETE ALL",this.store.name);let a=this.options(b,c);a.H=!1;let d=this.cursor(a);return this.G(d,(b,c,a)=>a.delete())}J(c,a){let b;a?b=c:(b={},a=c);let d=this.cursor(b);return this.G(d,a)}Y(a){let b=this.cursor({});return new av((c,d)=>{b.onerror=a=>{let b=aE(a.target.error);d(b)},b.onsuccess=d=>{let b=d.target.result;b?a(b.primaryKey,b.value).next(a=>{a?b.continue():c()}):c()}})}G(a,b){let c=[];return new av((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=g=>{let a=g.target.result;if(!a)return void d();let e=new ay(a),f=b(a.primaryKey,a.value,e);if(f instanceof av){let h=f.catch(a=>(e.done(),av.reject(a)));c.push(h)}e.isDone?d():null===e.U?a.continue():a.continue(e.U)}}).next(()=>av.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.H?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function aC(a){return new av((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=aE(a.target.error);c(b)}})}let aD=null;function aE(a){let b=ax.v(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new W("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aD||(aD=!0,setTimeout(()=>{throw d},0)),d}}return a}class aF{constructor(a,b){this.asyncQueue=a,this.X=b,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(a){Q("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{Q("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(a){aA(a)?Q("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await au(a)}await this.Z(1)})}}class aG{constructor(a,b){this.localStore=a,this.persistence=b}async tt(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.et(b,a))}et(b,a){let c=new Set,d=a,e=!0;return av.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(b).next(a=>{if(null!==a&&!c.has(a))return Q("IndexBackiller",`Processing collection: ${a}`),this.nt(b,a,d).next(b=>{d-=b,c.add(a)});e=!1})).next(()=>a-d)}nt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.st(d,c)).next(c=>(Q("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}st(a,b){let c=a;return b.changes.forEach((d,b)=>{let a=aq(b);as(a,c)>0&&(c=a)}),new ar(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class x{constructor(b,a){this.previousValue=b,a&&(a.sequenceNumberHandler=a=>this.it(a),this.rt=b=>a.writeSequenceNumber(b))}it(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.rt&&this.rt(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aH(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function aI(a,c){for(let b in a)Object.prototype.hasOwnProperty.call(a,b)&&c(b,a[b])}function aJ(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
x.ot=-1;class j{constructor(a,b){this.comparator=a,this.root=b||g.EMPTY}insert(a,b){return new j(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,g.BLACK,null,null))}remove(a){return new j(this.comparator,this.root.remove(a,this.comparator).copy(null,null,g.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){let b=this.comparator(c,a.key);if(0===b)return a.value;b<0?a=a.left:b>0&&(a=a.right)}return null}indexOf(d){let b=0,a=this.root;for(;!a.isEmpty();){let c=this.comparator(d,a.key);if(0===c)return b+a.left.size;c<0?a=a.left:(b+=a.left.size+1,a=a.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new aK(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new aK(this.root,a,this.comparator,!1)}getReverseIterator(){return new aK(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new aK(this.root,a,this.comparator,!0)}}class aK{constructor(a,c,e,d){this.isReverse=d,this.nodeStack=[];let b=1;for(;!a.isEmpty();)if(b=c?e(a.key,c):1,c&&d&&(b*=-1),b<0)a=this.isReverse?a.left:a.right;else{if(0===b){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class g{constructor(d,e,a,b,c){this.key=d,this.value=e,this.color=null!=a?a:g.RED,this.left=null!=b?b:g.EMPTY,this.right=null!=c?c:g.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new g(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(b,c,d){let a=this,e=d(b,a.key);return(a=e<0?a.copy(null,null,null,a.left.insert(b,c,d),null):0===e?a.copy(null,c,null,null,null):a.copy(null,null,null,null,a.right.insert(b,c,d))).fixUp()}removeMin(){if(this.left.isEmpty())return g.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(b,c){let d,a=this;if(0>c(b,a.key))a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(b,c),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===c(b,a.key)){if(a.right.isEmpty())return g.EMPTY;d=a.right.min(),a=a.copy(d.key,d.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(b,c))}return a.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,g.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,g.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();let a=this.left.check();if(a!==this.right.check())throw U();return a+(this.isRed()?0:1)}}g.EMPTY=null,g.RED=!0,g.BLACK=!1,g.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(a,b,c,d,e){return this}insert(a,b,c){return new g(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class m{constructor(a){this.comparator=a,this.data=new j(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,d){let b=this.data.getIteratorFrom(a[0]);for(;b.hasNext();){let c=b.getNext();if(this.comparator(c.key,a[1])>=0)return;d(c.key)}}forEachWhile(c,b){let a;for(a=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();a.hasNext();)if(!c(a.getNext().key))return}firstAfterOrEqual(b){let a=this.data.getIteratorFrom(b);return a.hasNext()?a.getNext().key:null}getIterator(){return new aL(this.data.getIterator())}getIteratorFrom(a){return new aL(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof m)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(b){let a=new m(this.comparator);return a.data=b,a}}class aL{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function aM(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class aN{constructor(a){this.fields=a,a.sort(ak.comparator)}static empty(){return new aN([])}unionWith(b){let a=new m(ak.comparator);for(let c of this.fields)a=a.add(c);for(let d of b)a=a.add(d);return new aN(a.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return af(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class n{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new n(b)}static fromUint8Array(a){let b=function(b){let c="";for(let a=0;a<b.length;++a)c+=String.fromCharCode(b[a]);return c}(a);return new n(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(b){let c=new Uint8Array(b.length);for(let a=0;a<b.length;a++)c[a]=b.charCodeAt(a);return c}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return u(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}n.EMPTY_BYTE_STRING=new n("");let aO=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function aP(a){var f,g;if(!a&&U(),"string"==typeof a){let c=0,b=aO.exec(a);if(!b&&U(),b[1]){let d=b[1];c=Number(d=(d+"000000000").substr(0,9))}let e=new Date(a);return{seconds:Math.floor(e.getTime()/1e3),nanos:c}}return{seconds:aQ(a.seconds),nanos:aQ(a.nanos)}}function aQ(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function aR(a){return"string"==typeof a?n.fromBase64String(a):n.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function aS(c){var a,b;return"server_timestamp"===(null===(b=((null===(a=null==c?void 0:c.mapValue)|| void 0===a?void 0:a.fields)||{}).__type__)|| void 0===b?void 0:b.stringValue)}function aT(b){let a=b.mapValue.fields.__previous_value__;return aS(a)?aT(a):a}function aU(b){let a=aP(b.mapValue.fields.__local_write_time__.timestampValue);return new ag(a.seconds,a.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aV{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class aW{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new aW("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof aW&&a.projectId===this.projectId&&a.database===this.database}}function aX(a){return 0===a&&1/a== -1/0}function aY(a){return"number"==typeof a&&Number.isInteger(a)&&!aX(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let aZ={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},a$={nullValue:"NULL_VALUE"};function a_(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?aS(a)?4:bd(a)?9007199254740991:10:U()}function a0(a,b){var e,f,c,d;if(a===b)return!0;let g=a_(a);if(g!==a_(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return aU(a).isEqual(aU(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=aP(a.timestampValue),d=aP(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return e=a,f=b,aR(e.bytesValue).isEqual(aR(f.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return c=a,d=b,aQ(c.geoPointValue.latitude)===aQ(d.geoPointValue.latitude)&&aQ(c.geoPointValue.longitude)===aQ(d.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return aQ(a.integerValue)===aQ(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=aQ(a.doubleValue),d=aQ(b.doubleValue);return c===d?aX(c)===aX(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return af(a.arrayValue.values||[],b.arrayValue.values||[],a0);case 10:return function(d,e){let a=d.mapValue.fields||{},c=e.mapValue.fields||{};if(aH(a)!==aH(c))return!1;for(let b in a)if(a.hasOwnProperty(b)&&(void 0===c[b]||!a0(a[b],c[b])))return!1;return!0}(a,b);default:return U()}}function a1(a,b){return void 0!==(a.values||[]).find(a=>a0(a,b))}function a2(a,b){if(a===b)return 0;let c=a_(a),d=a_(b);if(c!==d)return u(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return u(a.booleanValue,b.booleanValue);case 2:return function(c,d){let a=aQ(c.integerValue||c.doubleValue),b=aQ(d.integerValue||d.doubleValue);return a<b?-1:a>b?1:a===b?0:isNaN(a)?isNaN(b)?0:-1:1}(a,b);case 3:return a3(a.timestampValue,b.timestampValue);case 4:return a3(aU(a),aU(b));case 5:return u(a.stringValue,b.stringValue);case 6:return function(a,b){let c=aR(a),d=aR(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(e,f){let b=e.split("/"),c=f.split("/");for(let a=0;a<b.length&&a<c.length;a++){let d=u(b[a],c[a]);if(0!==d)return d}return u(b.length,c.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=u(aQ(a.latitude),aQ(b.latitude));return 0!==c?c:u(aQ(a.longitude),aQ(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(e,f){let b=e.values||[],c=f.values||[];for(let a=0;a<b.length&&a<c.length;++a){let d=a2(b[a],c[a]);if(d)return d}return u(b.length,c.length)}(a.arrayValue,b.arrayValue);case 10:return function(d,e){if(d===aZ.mapValue&&e===aZ.mapValue)return 0;if(d===aZ.mapValue)return 1;if(e===aZ.mapValue)return -1;let f=d.fields||{},b=Object.keys(f),g=e.fields||{},c=Object.keys(g);b.sort(),c.sort();for(let a=0;a<b.length&&a<c.length;++a){let h=u(b[a],c[a]);if(0!==h)return h;let i=a2(f[b[a]],g[c[a]]);if(0!==i)return i}return u(b.length,c.length)}(a.mapValue,b.mapValue);default:throw U()}}function a3(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return u(a,b);let c=aP(a),d=aP(b),e=u(c.seconds,d.seconds);return 0!==e?e:u(c.nanos,d.nanos)}function a4(a){return a5(a)}function a5(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(b){let a=aP(b);return`time(${a.seconds},${a.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?aR(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,f.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(c){let a="[",b=!0;for(let d of c.values||[])b?b=!1:a+=",",a+=a5(d);return a+"]"}(a.arrayValue):"mapValue"in a?function(b){let e=Object.keys(b.fields||{}).sort(),a="{",c=!0;for(let d of e)c?c=!1:a+=",",a+=`${d}:${a5(b.fields[d])}`;return a+"}"}(a.mapValue):U()}function a6(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function a7(a){return!!a&&"integerValue"in a}function a8(a){return!!a&&"arrayValue"in a}function a9(a){return!!a&&"nullValue"in a}function ba(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function bb(a){return!!a&&"mapValue"in a}function bc(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let d={mapValue:{fields:{}}};return aI(a.mapValue.fields,(a,b)=>d.mapValue.fields[a]=bc(b)),d}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let b=0;b<(a.arrayValue.values||[]).length;++b)c.arrayValue.values[b]=bc(a.arrayValue.values[b]);return c}return Object.assign({},a)}function bd(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function be(a){return"nullValue"in a?a$:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?a6(aW.empty(),f.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:U()}function bf(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?a6(aW.empty(),f.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?aZ:U()}function bg(a,b){let c=a2(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function bh(a,b){let c=a2(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class bi{constructor(a){this.value=a}static empty(){return new bi({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!bb(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=bc(b)}setAll(a){let b=ak.emptyPath(),c={},d=[];a.forEach((e,a)=>{if(!b.isImmediateParentOf(a)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=a.popLast()}e?c[a.lastSegment()]=bc(e):d.push(a.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(b){let a=this.field(b.popLast());bb(a)&&a.mapValue.fields&&delete a.mapValue.fields[b.lastSegment()]}isEqual(a){return a0(this.value,a.value)}getFieldsMap(d){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let c=0;c<d.length;++c){let b=a.mapValue.fields[d.get(c)];bb(b)&&b.mapValue.fields||(b={mapValue:{fields:{}}},a.mapValue.fields[d.get(c)]=b),a=b}return a.mapValue.fields}applyChanges(a,b,c){for(let d of(aI(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new bi(bc(this.value))}}function bj(a){let b=[];return aI(a.fields,(e,c)=>{let a=new ak([e]);if(bb(c)){let d=bj(c.mapValue).fields;if(0===d.length)b.push(a);else for(let f of d)b.push(a.child(f))}else b.push(a)}),new aN(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class bk{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new bk(a,0,ah.min(),ah.min(),bi.empty(),0)}static newFoundDocument(a,b,c){return new bk(a,1,b,ah.min(),c,0)}static newNoDocument(a,b){return new bk(a,2,b,ah.min(),bi.empty(),0)}static newUnknownDocument(a,b){return new bk(a,3,b,ah.min(),bi.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=bi.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=bi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ah.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof bk&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new bk(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class bl{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ut=null}}function bm(a,b=null,c=[],d=[],e=null,f=null,g=null){return new bl(a,b,c,d,e,f,g)}function bn(d){var e,c;let a=e=d;if(null===a.ut){let b=a.path.canonicalString();null!==a.collectionGroup&&(b+="|cg:"+a.collectionGroup),b+="|f:",b+=a.filters.map(b=>{var a;return(a=b).field.canonicalString()+a.op.toString()+a4(a.value)}).join(","),b+="|ob:",b+=a.orderBy.map(b=>{var a;return(a=b).field.canonicalString()+a.dir}).join(","),c=a.limit,null==c||(b+="|l:",b+=a.limit),a.startAt&&(b+="|lb:",b+=a.startAt.inclusive?"b:":"a:",b+=a.startAt.position.map(a=>a4(a)).join(",")),a.endAt&&(b+="|ub:",b+=a.endAt.inclusive?"a:":"b:",b+=a.endAt.position.map(a=>a4(a)).join(",")),a.ut=b}return a.ut}function bo(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!bD(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!a0(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!bF(a.startAt,b.startAt)&&bF(a.endAt,b.endAt)}function bp(a){return f.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function bq(a,b){return a.filters.filter(a=>a instanceof e&&a.field.isEqual(b))}function br(g,i,d){let b=a$,c=!0;for(let e of bq(g,i)){let a=a$,h=!0;switch(e.op){case"<":case"<=":a=be(e.value);break;case"==":case"in":case">=":a=e.value;break;case">":a=e.value,h=!1;break;case"!=":case"not-in":a=a$}0>bg({value:b,inclusive:c},{value:a,inclusive:h})&&(b=a,c=h)}if(null!==d){for(let f=0;f<g.orderBy.length;++f)if(g.orderBy[f].field.isEqual(i)){let j=d.position[f];0>bg({value:b,inclusive:c},{value:j,inclusive:d.inclusive})&&(b=j,c=d.inclusive);break}}return{value:b,inclusive:c}}function bs(h,i,d){let b=aZ,c=!0;for(let e of bq(h,i)){let a=aZ,f=!0;switch(e.op){case">=":case">":a=bf(e.value),f=!1;break;case"==":case"in":case"<=":a=e.value;break;case"<":a=e.value,f=!1;break;case"!=":case"not-in":a=aZ}bh({value:b,inclusive:c},{value:a,inclusive:f})>0&&(b=a,c=f)}if(null!==d){for(let g=0;g<h.orderBy.length;++g)if(h.orderBy[g].field.isEqual(i)){let j=d.position[g];bh({value:b,inclusive:c},{value:j,inclusive:d.inclusive})>0&&(b=j,c=d.inclusive);break}}return{value:b,inclusive:c}}class e extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(b,a,c){return b.isKeyField()?"in"===a||"not-in"===a?this.ct(b,a,c):new bt(b,a,c):"array-contains"===a?new bx(b,c):"in"===a?new by(b,c):"not-in"===a?new bz(b,c):"array-contains-any"===a?new bA(b,c):new e(b,a,c)}static ct(a,c,b){return"in"===c?new bu(a,b):new bv(a,b)}matches(b){let a=b.data.field(this.field);return"!="===this.op?null!==a&&this.at(a2(a,this.value)):null!==a&&a_(this.value)===a_(a)&&this.at(a2(a,this.value))}at(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return U()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bt extends e{constructor(b,c,a){super(b,c,a),this.key=f.fromName(a.referenceValue)}matches(a){let b=f.comparator(a.key,this.key);return this.at(b)}}class bu extends e{constructor(b,a){super(b,"in",a),this.keys=bw("in",a)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class bv extends e{constructor(b,a){super(b,"not-in",a),this.keys=bw("not-in",a)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function bw(c,b){var a;return((null===(a=b.arrayValue)|| void 0===a?void 0:a.values)||[]).map(a=>f.fromName(a.referenceValue))}class bx extends e{constructor(a,b){super(a,"array-contains",b)}matches(b){let a=b.data.field(this.field);return a8(a)&&a1(a.arrayValue,this.value)}}class by extends e{constructor(a,b){super(a,"in",b)}matches(b){let a=b.data.field(this.field);return null!==a&&a1(this.value.arrayValue,a)}}class bz extends e{constructor(a,b){super(a,"not-in",b)}matches(b){if(a1(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let a=b.data.field(this.field);return null!==a&&!a1(this.value.arrayValue,a)}}class bA extends e{constructor(a,b){super(a,"array-contains-any",b)}matches(b){let a=b.data.field(this.field);return!(!a8(a)||!a.arrayValue.values)&&a.arrayValue.values.some(a=>a1(this.value.arrayValue,a))}}class bB{constructor(a,b){this.position=a,this.inclusive=b}}class bC{constructor(a,b="asc"){this.field=a,this.dir=b}}function bD(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function bE(d,h,e){let a=0;for(let b=0;b<d.position.length;b++){let c=h[b],g=d.position[b];if(a=c.field.isKeyField()?f.comparator(f.fromName(g.referenceValue),e.key):a2(g,e.data.field(c.field)),"desc"===c.dir&&(a*=-1),0!==a)break}return a}function bF(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!a0(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class bG{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.lt=null,this.ft=null,this.startAt,this.endAt}}function bH(a,b,c,d,e,f,g,h){return new bG(a,b,c,d,e,f,g,h)}function bI(a){return new bG(a)}function bJ(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function bK(b){for(let a of b.filters)if(a.ht())return a.field;return null}function bL(a){return null!==a.collectionGroup}function bM(e){var f;let a=f=e;if(null===a.lt){a.lt=[];let b=bK(a),g=bJ(a);if(null!==b&&null===g)b.isKeyField()||a.lt.push(new bC(b)),a.lt.push(new bC(ak.keyField(),"asc"));else{let c=!1;for(let d of a.explicitOrderBy)a.lt.push(d),d.field.isKeyField()&&(c=!0);if(!c){let h=a.explicitOrderBy.length>0?a.explicitOrderBy[a.explicitOrderBy.length-1].dir:"asc";a.lt.push(new bC(ak.keyField(),h))}}}return a.lt}function bN(d){var e;let a=e=d;if(!a.ft){if("F"===a.limitType)a.ft=bm(a.path,a.collectionGroup,bM(a),a.filters,a.limit,a.startAt,a.endAt);else{let b=[];for(let c of bM(a)){let f="desc"===c.dir?"asc":"desc";b.push(new bC(c.field,f))}let g=a.endAt?new bB(a.endAt.position,a.endAt.inclusive):null,h=a.startAt?new bB(a.startAt.position,a.startAt.inclusive):null;a.ft=bm(a.path,a.collectionGroup,b,a.filters,a.limit,g,h)}}return a.ft}function bO(a,b,c){return new bG(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function bP(a,b){return bo(bN(a),bN(b))&&a.limitType===b.limitType}function bQ(a){return`${bn(bN(a))}|lt:${a.limitType}`}function bR(c){var a,d;let b;return`Query(target=${b=(a=bN(c)).path.canonicalString(),null!==a.collectionGroup&&(b+=" collectionGroup="+a.collectionGroup),a.filters.length>0&&(b+=`, filters: [${a.filters.map(b=>{var a;return`${(a=b).field.canonicalString()} ${a.op} ${a4(a.value)}`}).join(", ")}]`),d=a.limit,null==d||(b+=", limit: "+a.limit),a.orderBy.length>0&&(b+=`, orderBy: [${a.orderBy.map(b=>{var a;return a=b,`${a.field.canonicalString()} (${a.dir})`}).join(", ")}]`),a.startAt&&(b+=", startAt: ",b+=a.startAt.inclusive?"b:":"a:",b+=a.startAt.position.map(a=>a4(a)).join(",")),a.endAt&&(b+=", endAt: ",b+=a.endAt.inclusive?"a:":"b:",b+=a.endAt.position.map(a=>a4(a)).join(",")),`Target(${b})`}; limitType=${c.limitType})`}function bS(c,b){var a,d;return b.isFoundDocument()&&function(a,c){let b=c.key.path;return null!==a.collectionGroup?c.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(b):f.isDocumentKey(a.path)?a.path.isEqual(b):a.path.isImmediateParentOf(b)}(c,b)&&function(b,c){for(let a of b.explicitOrderBy)if(!a.field.isKeyField()&&null===c.data.field(a.field))return!1;return!0}(c,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(c,b)&&(a=c,d=b,(!a.startAt||!!function(a,c,d){let b=bE(a,c,d);return a.inclusive?b<=0:b<0}(a.startAt,bM(a),d))&&(!a.endAt||!!function(a,c,d){let b=bE(a,c,d);return a.inclusive?b>=0:b>0}(a.endAt,bM(a),d)))}function bT(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function bU(a){return(e,f)=>{let b=!1;for(let c of bM(a)){let d=bV(c,e,f);if(0!==d)return d;b=b||c.field.isKeyField()}return 0}}function bV(a,b,c){let d=a.field.isKeyField()?f.comparator(b.key,c.key):function(a,d,e){let b=d.data.field(a),c=e.data.field(a);return null!==b&&null!==c?a2(b,c):U()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function bW(b,a){if(b.dt){if(isNaN(a))return{doubleValue:"NaN"};if(a===1/0)return{doubleValue:"Infinity"};if(a=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aX(a)?"-0":a}}function bX(a){return{integerValue:""+a}}function bY(b,a){return aY(a)?bX(a):bW(b,a)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class h{constructor(){this._=void 0}}function bZ(a,b,c){return a instanceof b0?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof b1?b2(a,b):a instanceof b3?b4(a,b):function(a,d){let b=b_(a,d),c=b6(b)+b6(a._t);return a7(b)&&a7(a._t)?bX(c):bW(a.wt,c)}(a,b)}function b$(a,b,c){return a instanceof b1?b2(a,b):a instanceof b3?b4(a,b):c}function b_(d,a){var b,c;return d instanceof b5?a7(b=a)||(c=b)&&"doubleValue"in c?a:{integerValue:0}:null}class b0 extends h{}class b1 extends h{constructor(a){super(),this.elements=a}}function b2(b,c){let a=b7(c);for(let d of b.elements)a.some(a=>a0(a,d))||a.push(d);return{arrayValue:{values:a}}}class b3 extends h{constructor(a){super(),this.elements=a}}function b4(b,c){let a=b7(c);for(let d of b.elements)a=a.filter(a=>!a0(a,d));return{arrayValue:{values:a}}}class b5 extends h{constructor(a,b){super(),this.wt=a,this._t=b}}function b6(a){return aQ(a.integerValue||a.doubleValue)}function b7(a){return a8(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class b8{constructor(a,b){this.field=a,this.transform=b}}class b9{constructor(a,b){this.version=a,this.transformResults=b}}class ca{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new ca}static exists(a){return new ca(void 0,a)}static updateTime(a){return new ca(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function cb(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class i{}function cc(b,c){if(!b.hasLocalMutations||c&&0===c.fields.length)return null;if(null===c)return b.isNoDocument()?new cm(b.key,ca.none()):new ch(b.key,b.data,ca.none());{let g=b.data,f=bi.empty(),d=new m(ak.comparator);for(let a of c.fields)if(!d.has(a)){let e=g.field(a);null===e&&a.length>1&&(a=a.popLast(),e=g.field(a)),null===e?f.delete(a):f.set(a,e),d=d.add(a)}return new ci(b.key,f,new aN(d.toArray()),ca.none())}}function cd(a,b,c){a instanceof ch?function(a,b,c){let d=a.value.clone(),e=ck(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof ci?function(b,a,c){if(!cb(b.precondition,a))return void a.convertToUnknownDocument(c.version);let e=ck(b.fieldTransforms,a,c.transformResults),d=a.data;d.setAll(cj(b)),d.setAll(e),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):function(c,a,b){a.convertToNoDocument(b.version).setHasCommittedMutations()}(0,b,c)}function ce(a,c,d,e){var f,b,g;return a instanceof ch?function(b,a,d,e){if(!cb(b.precondition,a))return d;let c=b.value.clone(),f=cl(b.fieldTransforms,e,a);return c.setAll(f),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(a,c,d,e):a instanceof ci?function(a,b,c,e){if(!cb(a.precondition,b))return c;let f=cl(a.fieldTransforms,e,b),d=b.data;return(d.setAll(cj(a)),d.setAll(f),b.convertToFoundDocument(b.version,d).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,c,d,e):(f=a,b=c,g=d,cb(f.precondition,b)?(b.convertToNoDocument(b.version).setHasLocalMutations(),null):g)}function cf(d,e){let a=null;for(let b of d.fieldTransforms){let f=e.data.field(b.field),c=b_(b.transform,f||null);null!=c&&(null===a&&(a=bi.empty()),a.set(b.field,c))}return a||null}function cg(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&af(c,d,(e,f)=>{var c,d,a,b;return c=e,d=f,c.field.isEqual(d.field)&&(a=c.transform,b=d.transform,a instanceof b1&&b instanceof b1||a instanceof b3&&b instanceof b3?af(a.elements,b.elements,a0):a instanceof b5&&b instanceof b5?a0(a._t,b._t):a instanceof b0&&b instanceof b0)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class ch extends i{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class ci extends i{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function cj(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function ck(d,f,b){var g;let e=new Map;(g=d.length===b.length)||U();for(let a=0;a<b.length;a++){let c=d[a],h=c.transform,i=f.data.field(c.field);e.set(c.field,b$(h,i,b[a]))}return e}function cl(c,d,e){let b=new Map;for(let a of c){let f=a.transform,g=e.data.field(a.field);b.set(a.field,bZ(f,g,d))}return b}class cm extends i{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cn extends i{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class co{constructor(a){this.count=a}}function cp(a){switch(a){default:return U();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function cq(a){if(void 0===a)return R("GRPC error has no .code"),V.UNKNOWN;switch(a){case k.OK:return V.OK;case k.CANCELLED:return V.CANCELLED;case k.UNKNOWN:return V.UNKNOWN;case k.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case k.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case k.INTERNAL:return V.INTERNAL;case k.UNAVAILABLE:return V.UNAVAILABLE;case k.UNAUTHENTICATED:return V.UNAUTHENTICATED;case k.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case k.NOT_FOUND:return V.NOT_FOUND;case k.ALREADY_EXISTS:return V.ALREADY_EXISTS;case k.PERMISSION_DENIED:return V.PERMISSION_DENIED;case k.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case k.ABORTED:return V.ABORTED;case k.OUT_OF_RANGE:return V.OUT_OF_RANGE;case k.UNIMPLEMENTED:return V.UNIMPLEMENTED;case k.DATA_LOSS:return V.DATA_LOSS;default:return U()}}(a=k||(k={}))[a.OK=0]="OK",a[a.CANCELLED=1]="CANCELLED",a[a.UNKNOWN=2]="UNKNOWN",a[a.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",a[a.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",a[a.NOT_FOUND=5]="NOT_FOUND",a[a.ALREADY_EXISTS=6]="ALREADY_EXISTS",a[a.PERMISSION_DENIED=7]="PERMISSION_DENIED",a[a.UNAUTHENTICATED=16]="UNAUTHENTICATED",a[a.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",a[a.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",a[a.ABORTED=10]="ABORTED",a[a.OUT_OF_RANGE=11]="OUT_OF_RANGE",a[a.UNIMPLEMENTED=12]="UNIMPLEMENTED",a[a.INTERNAL=13]="INTERNAL",a[a.UNAVAILABLE=14]="UNAVAILABLE",a[a.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class cr{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let c=this.mapKeyFn(a),b=this.inner[c];if(void 0!==b){for(let[d,e]of b)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,d){let e=this.mapKeyFn(a),b=this.inner[e];if(void 0===b)return this.inner[e]=[[a,d]],void this.innerSize++;for(let c=0;c<b.length;c++)if(this.equalsFn(b[c][0],a))return void(b[c]=[a,d]);b.push([a,d]),this.innerSize++}delete(c){let d=this.mapKeyFn(c),a=this.inner[d];if(void 0===a)return!1;for(let b=0;b<a.length;b++)if(this.equalsFn(a[b][0],c))return 1===a.length?delete this.inner[d]:a.splice(b,1),this.innerSize--,!0;return!1}forEach(a){aI(this.inner,(e,b)=>{for(let[c,d]of b)a(c,d)})}isEmpty(){return aJ(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cs=new j(f.comparator),ct=new j(f.comparator);function cu(...c){let a=ct;for(let b of c)a=a.insert(b.key,b);return a}function cv(a){let b=ct;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function cw(){return cy()}function cx(){return cy()}function cy(){return new cr(a=>a.toString(),(a,b)=>a.isEqual(b))}let cz=new j(f.comparator),cA=new m(f.comparator);function cB(...b){let a=cA;for(let c of b)a=a.add(c);return a}let cC=new m(u);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class cD{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,c){let b=new Map;return b.set(a,cE.createSynthesizedTargetChangeForCurrentChange(a,c)),new cD(ah.min(),b,cC,cs,cB())}}class cE{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(b,a){return new cE(n.EMPTY_BYTE_STRING,a,cB(),cB(),cB())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class cF{constructor(a,b,c,d){this.gt=a,this.removedTargetIds=b,this.key=c,this.yt=d}}class cG{constructor(a,b){this.targetId=a,this.It=b}}class cH{constructor(a,b,c=n.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class cI{constructor(){this.Tt=0,this.Et=cL(),this.At=n.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(a){a.approximateByteSize()>0&&(this.bt=!0,this.At=a)}St(){let a=cB(),b=cB(),c=cB();return this.Et.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:U()}}),new cE(this.At,this.Rt,a,b,c)}Dt(){this.bt=!1,this.Et=cL()}Ct(a,b){this.bt=!0,this.Et=this.Et.insert(a,b)}xt(a){this.bt=!0,this.Et=this.Et.remove(a)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class cJ{constructor(a){this.Mt=a,this.Ft=new Map,this.$t=cs,this.Bt=cK(),this.Lt=new m(u)}Ut(a){for(let b of a.gt)a.yt&&a.yt.isFoundDocument()?this.qt(b,a.yt):this.Kt(b,a.key,a.yt);for(let c of a.removedTargetIds)this.Kt(c,a.key,a.yt)}Gt(a){this.forEachTarget(a,c=>{let b=this.Qt(c);switch(a.state){case 0:this.jt(c)&&b.Vt(a.resumeToken);break;case 1:b.kt(),b.Pt||b.Dt(),b.Vt(a.resumeToken);break;case 2:b.kt(),b.Pt||this.removeTarget(c);break;case 3:this.jt(c)&&(b.Ot(),b.Vt(a.resumeToken));break;case 4:this.jt(c)&&(this.Wt(c),b.Vt(a.resumeToken));break;default:U()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Ft.forEach((c,a)=>{this.jt(a)&&b(a)})}zt(c){let a=c.targetId,b=c.It.count,d=this.Ht(a);if(d){let e=d.target;if(bp(e)){if(0===b){let g=new f(e.path);this.Kt(a,g,bk.newNoDocument(g,ah.min()))}else{var h;(h=1===b)||U()}}else this.Jt(a)!==b&&(this.Wt(a),this.Lt=this.Lt.add(a))}}Yt(a){let b=new Map;this.Ft.forEach((c,d)=>{let g=this.Ht(d);if(g){if(c.current&&bp(g.target)){let e=new f(g.target.path);null!==this.$t.get(e)||this.Xt(d,e)||this.Kt(d,e,bk.newNoDocument(e,a))}c.vt&&(b.set(d,c.St()),c.Dt())}});let c=cB();this.Bt.forEach((a,b)=>{let d=!0;b.forEachWhile(b=>{let a=this.Ht(b);return!a||2===a.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.$t.forEach((c,b)=>b.setReadTime(a));let d=new cD(a,b,this.Lt,this.$t,c);return this.$t=cs,this.Bt=cK(),this.Lt=new m(u),d}qt(b,a){if(!this.jt(b))return;let c=this.Xt(b,a.key)?2:0;this.Qt(b).Ct(a.key,c),this.$t=this.$t.insert(a.key,a),this.Bt=this.Bt.insert(a.key,this.Zt(a.key).add(b))}Kt(b,a,c){if(!this.jt(b))return;let d=this.Qt(b);this.Xt(b,a)?d.Ct(a,1):d.xt(a),this.Bt=this.Bt.insert(a,this.Zt(a).delete(b)),c&&(this.$t=this.$t.insert(a,c))}removeTarget(a){this.Ft.delete(a)}Jt(a){let b=this.Qt(a).St();return this.Mt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Nt(a){this.Qt(a).Nt()}Qt(b){let a=this.Ft.get(b);return a||(a=new cI,this.Ft.set(b,a)),a}Zt(b){let a=this.Bt.get(b);return a||(a=new m(u),this.Bt=this.Bt.insert(b,a)),a}jt(a){let b=null!==this.Ht(a);return b||Q("WatchChangeAggregator","Detected inactive target",a),b}Ht(a){let b=this.Ft.get(a);return b&&b.Pt?null:this.Mt.te(a)}Wt(a){this.Ft.set(a,new cI),this.Mt.getRemoteKeysForTarget(a).forEach(b=>{this.Kt(a,b,null)})}Xt(a,b){return this.Mt.getRemoteKeysForTarget(a).has(b)}}function cK(){return new j(f.comparator)}function cL(){return new j(f.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cM={asc:"ASCENDING",desc:"DESCENDING"},cN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class cO{constructor(a,b){this.databaseId=a,this.dt=b}}function cP(b,a){return b.dt?`${new Date(1e3*a.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+a.nanoseconds).slice(-9)}Z`:{seconds:""+a.seconds,nanos:a.nanoseconds}}function cQ(b,a){return b.dt?a.toBase64():a.toUint8Array()}function cR(a){var b;return!a&&U(),ah.fromTimestamp(function(b){let a=aP(b);return new ag(a.seconds,a.nanos)}(a))}function cS(b,c){var a;return(a=b,new ai(["projects",a.projectId,"databases",a.database])).child("documents").child(c).canonicalString()}function cT(b){var c;let a=ai.fromString(b);return dd(a)||U(),a}function cU(a,b){return cS(a.databaseId,b.path)}function cV(b,c){let a=cT(c);if(a.get(1)!==b.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+b.databaseId.projectId);if(a.get(3)!==b.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+b.databaseId.database);return new f(cZ(a))}function cW(a,b){return cS(a.databaseId,b)}function cX(b){let a=cT(b);return 4===a.length?ai.emptyPath():cZ(a)}function cY(a){return new ai(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function cZ(a){var b;return a.length>4&&"documents"===a.get(4)||U(),a.popFirst(5)}function c$(a,b,c){return{name:cU(a,b),fields:c.value.mapValue.fields}}function c_(d,a,c){let e=cV(d,a.name),f=cR(a.updateTime),g=new bi({mapValue:{fields:a.fields}}),b=bk.newFoundDocument(e,f,g);return c&&b.setHasCommittedMutations(),c?b.setHasCommittedMutations():b}function c0(c,a){var e,d,f,g;let b;if(a instanceof ch)b={update:c$(c,a.key,a.value)};else if(a instanceof cm)b={delete:cU(c,a.key)};else if(a instanceof ci)b={update:c$(c,a.key,a.data),updateMask:dc(a.fieldMask)};else{if(!(a instanceof cn))return U();b={verify:cU(c,a.key)}}return a.fieldTransforms.length>0&&(b.updateTransforms=a.fieldTransforms.map(a=>(function(c,b){let a=b.transform;if(a instanceof b0)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof b1)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof b3)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof b5)return{fieldPath:b.field.canonicalString(),increment:a._t};throw U()})(0,a))),a.precondition.isNone||(b.currentDocument=(e=c,void 0!==(d=a.precondition).updateTime?{updateTime:(f=e,cP(f,(g=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:U())),b}function c1(d,a){var b;let c=a.currentDocument?void 0!==(b=a.currentDocument).updateTime?ca.updateTime(cR(b.updateTime)):void 0!==b.exists?ca.exists(b.exists):ca.none():ca.none(),e=a.updateTransforms?a.updateTransforms.map(a=>(function(c,a){let b=null;if("setToServerValue"in a){var g;"REQUEST_TIME"===a.setToServerValue||U(),b=new b0}else if("appendMissingElements"in a){let d=a.appendMissingElements.values||[];b=new b1(d)}else if("removeAllFromArray"in a){let e=a.removeAllFromArray.values||[];b=new b3(e)}else"increment"in a?b=new b5(c,a.increment):U();let f=ak.fromServerFormat(a.fieldPath);return new b8(f,b)})(d,a)):[];if(a.update){a.update.name;let f=cV(d,a.update.name),g=new bi({mapValue:{fields:a.update.fields}});if(a.updateMask){let h=function(a){let b=a.fieldPaths||[];return new aN(b.map(a=>ak.fromServerFormat(a)))}(a.updateMask);return new ci(f,g,h,c,e)}return new ch(f,g,c,e)}if(a.delete){let i=cV(d,a.delete);return new cm(i,c)}if(a.verify){let j=cV(d,a.verify);return new cn(j,c)}return U()}function c2(a,b){return{documents:[cW(a,b.path)]}}function c3(d,a){var f,g,c,l,h;let b={structuredQuery:{}},e=a.path;null!==a.collectionGroup?(b.parent=cW(d,e),b.structuredQuery.from=[{collectionId:a.collectionGroup,allDescendants:!0}]):(b.parent=cW(d,e.popLast()),b.structuredQuery.from=[{collectionId:e.lastSegment()}]);let i=function(b){if(0===b.length)return;let a=b.map(a=>(function(a){if("=="===a.op){if(ba(a.value))return{unaryFilter:{field:c8(a.field),op:"IS_NAN"}};if(a9(a.value))return{unaryFilter:{field:c8(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(ba(a.value))return{unaryFilter:{field:c8(a.field),op:"IS_NOT_NAN"}};if(a9(a.value))return{unaryFilter:{field:c8(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:c8(a.field),op:c7(a.op),value:a.value}}})(a));return 1===a.length?a[0]:{compositeFilter:{op:"AND",filters:a}}}(a.filters);i&&(b.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(b=>{var a;return{field:c8((a=b).field),direction:c6(a.dir)}})}(a.orderBy);j&&(b.structuredQuery.orderBy=j);let k=(g=d,c=a.limit,g.dt||null==(l=c)?c:{value:c});return null!==k&&(b.structuredQuery.limit=k),a.startAt&&(b.structuredQuery.startAt={before:(f=a.startAt).inclusive,values:f.position}),a.endAt&&(b.structuredQuery.endAt={before:!(h=a.endAt).inclusive,values:h.position}),b}function c4(e){var n,b,o;let c=cX(e.parent),a=e.structuredQuery,f=a.from?a.from.length:0,g=null;if(f>0){(n=1===f)||U();let d=a.from[0];d.allDescendants?g=d.collectionId:c=c.child(d.collectionId)}let h=[];a.where&&(h=c5(a.where));let i=[];a.orderBy&&(i=a.orderBy.map(b=>{var a;return a=b,new bC(c9(a.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(a.direction))}));let j=null,k;a.limit&&(j=null==(o=k="object"==typeof(b=a.limit)?b.value:b)?null:k);let l=null;a.startAt&&(l=function(a){let b=!!a.before,c=a.values||[];return new bB(c,b)}(a.startAt));let m=null;return a.endAt&&(m=function(a){let b=!a.before,c=a.values||[];return new bB(c,b)}(a.endAt)),bH(c,g,i,h,j,"F",l,m)}function c5(a){return a?void 0!==a.unaryFilter?[db(a)]:void 0!==a.fieldFilter?[da(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>c5(a)).reduce((a,b)=>a.concat(b)):U():[]}function c6(a){return cM[a]}function c7(a){return cN[a]}function c8(a){return{fieldPath:a.canonicalString()}}function c9(a){return ak.fromServerFormat(a.fieldPath)}function da(a){return e.create(c9(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(a.fieldFilter.op),a.fieldFilter.value)}function db(a){switch(a.unaryFilter.op){case"IS_NAN":let b=c9(a.unaryFilter.field);return e.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=c9(a.unaryFilter.field);return e.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=c9(a.unaryFilter.field);return e.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let f=c9(a.unaryFilter.field);return e.create(f,"!=",{nullValue:"NULL_VALUE"});default:return U()}}function dc(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function dd(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function de(c){var d,e;let a="";for(let b=0;b<c.length;b++){a.length>0&&(a=(d=a,d+"\x01\x01")),a=df(c.get(b),a)}return e=a,e+"\x01\x01"}function df(c,e){let a=e,f=c.length;for(let b=0;b<f;b++){let d=c.charAt(b);switch(d){case"\0":a+="\x01\x10";break;case"\x01":a+="\x01\x11";break;default:a+=d}}return a}function dg(a){var j,k;let e=a.length;if(e>=2||U(),2===e)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||U(),ai.emptyPath();let i=e-2,g=[],b="";for(let d=0;d<e;){let c=a.indexOf("\x01",d);switch((c<0||c>i)&&U(),a.charAt(c+1)){case"\x01":let h=a.substring(d,c),f;0===b.length?f=h:(b+=h,f=b,b=""),g.push(f);break;case"\x10":b+=a.substring(d,c),b+="\0";break;case"\x11":b+=a.substring(d,c+1);break;default:U()}d=c+2}return new ai(g)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function dh(a,b){return[a,de(b)]}function di(a,b,c){return[a,de(b),c]}let dj={},y=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],dk=[...y,"documentOverlays"],z=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],A=z,dl=[...A,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dm extends null{constructor(a,b){super(),this.ee=a,this.currentSequenceNumber=b}}function dn(a,b){var c;let d=c=a;return ax.N(d.ee,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class dp{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(b,d){let e=d.mutationResults;for(let a=0;a<this.mutations.length;a++){let c=this.mutations[a];c.key.isEqual(b.key)&&cd(c,b,e[a])}}applyToLocalView(b,a){for(let c of this.baseMutations)c.key.isEqual(b.key)&&(a=ce(c,b,a,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(b.key)&&(a=ce(d,b,a,this.localWriteTime));return a}applyToLocalDocumentSet(b,c){let a=cx();return this.mutations.forEach(e=>{let g=b.get(e.key),d=g.overlayedDocument,f=this.applyToLocalView(d,g.mutatedFields);f=c.has(e.key)?null:f;let h=cc(d,f);null!==h&&a.set(e.key,h),d.isValidDocument()||d.convertToNoDocument(ah.min())}),a}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),cB())}isEqual(a){return this.batchId===a.batchId&&af(this.mutations,a.mutations,(a,b)=>cg(a,b))&&af(this.baseMutations,a.baseMutations,(a,b)=>cg(a,b))}}class dq{constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(b,f,c){var g;(g=b.mutations.length===c.length)||U();let d=cz,e=b.mutations;for(let a=0;a<e.length;a++)d=d.insert(e[a].key,c[a].version);return new dq(b,f,c,d)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class dr{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class ds{constructor(a,b,c,d,e=ah.min(),f=ah.min(),g=n.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new ds(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new ds(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class dt{constructor(a){this.ne=a}}function du(f,a){let b=a.key,c={prefixPath:b.getCollectionPath().popLast().toArray(),collectionGroup:b.collectionGroup,documentId:b.path.lastSegment(),readTime:dv(a.readTime),hasCommittedMutations:a.hasCommittedMutations};if(a.isFoundDocument()){var d,e;c.document=(d=f.ne,{name:cU(d,(e=a).key),fields:e.data.value.mapValue.fields,updateTime:cP(d,e.version.toTimestamp())})}else if(a.isNoDocument())c.noDocument={path:b.path.toArray(),readTime:dw(a.version)};else{if(!a.isUnknownDocument())return U();c.unknownDocument={path:b.path.toArray(),version:dw(a.version)}}return c}function dv(b){let a=b.toTimestamp();return[a.seconds,a.nanoseconds]}function dw(b){let a=b.toTimestamp();return{seconds:a.seconds,nanoseconds:a.nanoseconds}}function dx(a){let b=new ag(a.seconds,a.nanoseconds);return ah.fromTimestamp(b)}function dy(h,a){let c=(a.baseMutations||[]).map(a=>c1(h.ne,a));for(let b=0;b<a.mutations.length-1;++b){let d=a.mutations[b];if(b+1<a.mutations.length&& void 0!==a.mutations[b+1].transform){let e=a.mutations[b+1];d.updateTransforms=e.transform.fieldTransforms,a.mutations.splice(b+1,1),++b}}let f=a.mutations.map(a=>c1(h.ne,a)),g=ag.fromMillis(a.localWriteTimeMs);return new dp(a.batchId,g,c,f)}function dz(a){var c,g,d;let e=dx(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?dx(a.lastLimboFreeSnapshotVersion):ah.min(),b;return void 0!==a.query.documents?(1===(c=a.query).documents.length||U(),b=bN(bI(cX(c.documents[0])))):b=bN(c4(d=a.query)),new ds(b,a.targetId,0,a.lastListenSequenceNumber,e,f,n.fromBase64String(a.resumeToken))}function dA(b,a){let d=dw(a.snapshotVersion),e=dw(a.lastLimboFreeSnapshotVersion),c;c=bp(a.target)?c2(b.ne,a.target):c3(b.ne,a.target);let f=a.resumeToken.toBase64();return{targetId:a.targetId,canonicalId:bn(a.target),readTime:d,resumeToken:f,lastListenSequenceNumber:a.sequenceNumber,lastLimboFreeSnapshotVersion:e,query:c}}function dB(a){let b=c4({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?bO(b,b.limit,"L"):b}function dC(b,a){return new dr(a.largestBatchId,c1(b.ne,a.overlayMutation))}function dD(b,a){let c=a.path.lastSegment();return[b,de(a.path.popLast()),c]}function dE(b,c,d,a){return{indexId:b,uid:c.uid||"",sequenceNumber:d,readTime:dw(a.readTime),documentKey:de(a.documentKey.path),largestBatchId:a.largestBatchId}}function dF(a){return dn(a,"bundles")}function dG(a){return dn(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class dH{constructor(a,b){this.wt=a,this.userId=b}static se(a,b){let c=b.uid||"";return new dH(a,c)}getOverlay(a,b){return dI(a).get(dD(this.userId,b)).next(a=>a?dC(this.wt,a):null)}getOverlays(b,a){let c=cw();return av.forEach(a,a=>this.getOverlay(b,a).next(b=>{null!==b&&c.set(a,b)})).next(()=>c)}saveOverlays(c,d,a){let b=[];return a.forEach((f,a)=>{let e=new dr(d,a);b.push(this.ie(c,e))}),av.waitFor(b)}removeOverlaysForBatchId(d,a,e){let b=new Set;a.forEach(a=>b.add(de(a.getCollectionPath())));let c=[];return b.forEach(a=>{let b=IDBKeyRange.bound([this.userId,a,e],[this.userId,a,e+1],!1,!0);c.push(dI(d).W("collectionPathOverlayIndex",b))}),av.waitFor(c)}getOverlaysForCollection(b,c,d){let f=cw(),a=de(c),e=IDBKeyRange.bound([this.userId,a,d],[this.userId,a,Number.POSITIVE_INFINITY],!0);return dI(b).K("collectionPathOverlayIndex",e).next(b=>{for(let c of b){let a=dC(this.wt,c);f.set(a.getKey(),a)}return f})}getOverlaysForCollectionGroup(b,a,c,e){let f=cw(),g,d=IDBKeyRange.bound([this.userId,a,c],[this.userId,a,Number.POSITIVE_INFINITY],!0);return dI(b).J({index:"collectionGroupOverlayIndex",range:d},(d,b,c)=>{let a=dC(this.wt,b);f.size()<e||a.largestBatchId===g?(f.set(a.getKey(),a),g=a.largestBatchId):c.done()}).next(()=>f)}ie(a,b){return dI(a).put(function(c,b,a){let[f,d,e]=dD(b,a.mutation.key);return{userId:b,collectionPath:d,documentId:e,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:c0(c.ne,a.mutation)}}(this.wt,this.userId,b))}}function dI(a){return dn(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class o{constructor(){}re(b,a){this.oe(b,a),a.ue()}oe(b,a){if("nullValue"in b)this.ce(a,5);else if("booleanValue"in b)this.ce(a,10),a.ae(b.booleanValue?1:0);else if("integerValue"in b)this.ce(a,15),a.ae(aQ(b.integerValue));else if("doubleValue"in b){let d=aQ(b.doubleValue);isNaN(d)?this.ce(a,13):(this.ce(a,15),aX(d)?a.ae(0):a.ae(d))}else if("timestampValue"in b){let c=b.timestampValue;this.ce(a,20),"string"==typeof c?a.he(c):(a.he(`${c.seconds||""}`),a.ae(c.nanos||0))}else if("stringValue"in b)this.le(b.stringValue,a),this.fe(a);else if("bytesValue"in b)this.ce(a,30),a.de(aR(b.bytesValue)),this.fe(a);else if("referenceValue"in b)this._e(b.referenceValue,a);else if("geoPointValue"in b){let e=b.geoPointValue;this.ce(a,45),a.ae(e.latitude||0),a.ae(e.longitude||0)}else"mapValue"in b?bd(b)?this.ce(a,Number.MAX_SAFE_INTEGER):(this.we(b.mapValue,a),this.fe(a)):"arrayValue"in b?(this.me(b.arrayValue,a),this.fe(a)):U()}le(b,a){this.ce(a,25),this.ge(b,a)}ge(a,b){b.he(a)}we(d,a){let b=d.fields||{};for(let c of(this.ce(a,55),Object.keys(b)))this.le(c,a),this.oe(b[c],a)}me(b,a){let c=b.values||[];for(let d of(this.ce(a,50),c))this.oe(d,a)}_e(a,b){this.ce(b,37),f.fromName(a).path.forEach(a=>{this.ce(b,60),this.ge(a,b)})}ce(a,b){a.ae(b)}fe(a){a.ae(2)}}function dJ(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function dK(a){let b=64-function(d){let b=0;for(let a=0;a<8;++a){let c=dJ(255&d[a]);if(b+=c,8!==c)break}return b}(a);return Math.ceil(b/8)}o.ye=new o;class dL{constructor(){this.Me=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(c){let b=c[Symbol.iterator](),a=b.next();for(;!a.done;)this.Ie(a.value),a=b.next();this.Te()}Ee(c){let b=c[Symbol.iterator](),a=b.next();for(;!a.done;)this.Ae(a.value),a=b.next();this.Re()}be(d){for(let b of d){let a=b.charCodeAt(0);if(a<128)this.Ie(a);else if(a<2048)this.Ie(960|a>>>6),this.Ie(128|63&a);else if(b<"\ud800"||"\udbff"<b)this.Ie(480|a>>>12),this.Ie(128|63&a>>>6),this.Ie(128|63&a);else{let c=b.codePointAt(0);this.Ie(240|c>>>18),this.Ie(128|63&c>>>12),this.Ie(128|63&c>>>6),this.Ie(128|63&c)}}this.Te()}Pe(d){for(let b of d){let a=b.charCodeAt(0);if(a<128)this.Ae(a);else if(a<2048)this.Ae(960|a>>>6),this.Ae(128|63&a);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|a>>>12),this.Ae(128|63&a>>>6),this.Ae(128|63&a);else{let c=b.codePointAt(0);this.Ae(240|c>>>18),this.Ae(128|63&c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c)}}this.Re()}ve(d){let a=this.Ve(d),b=dK(a);this.Se(1+b),this.buffer[this.position++]=255&b;for(let c=a.length-b;c<a.length;++c)this.buffer[this.position++]=255&a[c]}De(d){let a=this.Ve(d),b=dK(a);this.Se(1+b),this.buffer[this.position++]=~(255&b);for(let c=a.length-b;c<a.length;++c)this.buffer[this.position++]=~(255&a[c])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(a){this.Se(a.length),this.buffer.set(a,this.position),this.position+=a.length}Oe(){return this.buffer.slice(0,this.position)}Ve(d){let a=function(b){let a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,b,!1),new Uint8Array(a.buffer)}(d),c=0!=(128&a[0]);a[0]^=c?255:128;for(let b=1;b<a.length;++b)a[b]^=c?255:0;return a}Ie(b){let a=255&b;0===a?(this.xe(0),this.xe(255)):255===a?(this.xe(255),this.xe(0)):this.xe(a)}Ae(a){let b=255&a;0===b?(this.ke(0),this.ke(255)):255===b?(this.ke(255),this.ke(0)):this.ke(a)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(a){this.Se(1),this.buffer[this.position++]=a}ke(a){this.Se(1),this.buffer[this.position++]=~a}Se(d){let a=d+this.position;if(a<=this.buffer.length)return;let b=2*this.buffer.length;b<a&&(b=a);let c=new Uint8Array(b);c.set(this.buffer),this.buffer=c}},this.Fe=new class{constructor(a){this.Me=a}de(a){this.Me.pe(a)}he(a){this.Me.be(a)}ae(a){this.Me.ve(a)}ue(){this.Me.Ce()}}(this.Me),this.$e=new class{constructor(a){this.Me=a}de(a){this.Me.Ee(a)}he(a){this.Me.Pe(a)}ae(a){this.Me.De(a)}ue(){this.Me.Ne()}}(this.Me)}seed(a){this.Me.seed(a)}Be(a){return 0===a?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class dM{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Le(){let a=this.directionalValue.length,c=0===a||255===this.directionalValue[a-1]?a+1:a,b=new Uint8Array(c);return b.set(this.directionalValue,0),c!==a?b.set([0],this.directionalValue.length):++b[b.length-1],new dM(this.indexId,this.documentKey,this.arrayValue,b)}}function dN(b,c){let a=b.indexId-c.indexId;return 0!==a?a:0!==(a=dO(b.arrayValue,c.arrayValue))?a:0!==(a=dO(b.directionalValue,c.directionalValue))?a:f.comparator(b.documentKey,c.documentKey)}function dO(b,c){for(let a=0;a<b.length&&a<c.length;++a){let d=b[a]-c[a];if(0!==d)return d}return b.length-c.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class dP{constructor(a){for(let c of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ue=a.orderBy,this.qe=[],a.filters)){let b=c;b.ht()?this.Ke=b:this.qe.push(b)}}Ge(d){let e=al(d);if(void 0!==e&&!this.Qe(e))return!1;let b=am(d),a=0,c=0;for(;a<b.length&&this.Qe(b[a]);++a);if(a===b.length)return!0;if(void 0!==this.Ke){let f=b[a];if(!this.je(this.Ke,f)||!this.We(this.Ue[c++],f))return!1;++a}for(;a<b.length;++a){let g=b[a];if(c>=this.Ue.length||!this.We(this.Ue[c++],g))return!1}return!0}Qe(a){for(let b of this.qe)if(this.je(b,a))return!0;return!1}je(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}We(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class dQ{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new m(ai.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let c=a.lastSegment(),d=a.popLast(),b=this.index[c];return b&&b.has(d)}getEntries(a){return(this.index[a]||new m(ai.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dR=new Uint8Array(0);class dS{constructor(a,b){this.user=a,this.databaseId=b,this.He=new dQ,this.Je=new cr(a=>bn(a),(a,b)=>bo(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(b,a){if(!this.He.has(a)){let c=a.lastSegment(),d=a.popLast();b.addOnCommittedListener(()=>{this.He.add(a)});let e={collectionId:c,parent:de(d)};return dT(b).put(e)}return av.resolve()}getCollectionParents(b,a){var c;let e=[],d=IDBKeyRange.bound([a,""],[(c=a)+"\0",""],!1,!0);return dT(b).K(d).next(c=>{for(let b of c){if(b.collectionId!==a)break;e.push(dg(b.parent))}return e})}addFieldIndex(b,c){var a;let f=dV(b),d={indexId:(a=c).indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete d.indexId;let e=f.add(d);if(c.indexState){let g=dW(b);return e.next(a=>{g.put(dE(a,this.user,c.indexState.sequenceNumber,c.indexState.offset))})}return e.next()}deleteFieldIndex(a,b){let c=dV(a),d=dW(a),e=dU(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=dU(a),d=!0,e=new Map;return av.forEach(this.Ye(b),b=>this.Xe(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=cB(),g=[];return av.forEach(e,(d,e)=>{var h;Q("IndexedDbIndexManager",`Using index ${(h=d,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${bn(b)}`);let k=function(c,d){let b=al(d);if(void 0===b)return null;for(let a of bq(c,b.fieldPath))switch(a.op){case"array-contains-any":return a.value.arrayValue.values||[];case"array-contains":return[a.value]}return null}(e,d),l=function(d,e){let a=new Map;for(let b of am(e))for(let c of bq(d,b.fieldPath))switch(c.op){case"==":case"in":a.set(b.fieldPath.canonicalString(),c.value);break;case"not-in":case"!=":return a.set(b.fieldPath.canonicalString(),c.value),Array.from(a.values())}return null}(e,d),i=function(a,f){let d=[],b=!0;for(let c of am(f)){let e=0===c.kind?br(a,c.fieldPath,a.startAt):bs(a,c.fieldPath,a.startAt);d.push(e.value),b&&(b=e.inclusive)}return new bB(d,b)}(e,d),j=function(a,f){let d=[],b=!0;for(let c of am(f)){let e=0===c.kind?bs(a,c.fieldPath,a.endAt):br(a,c.fieldPath,a.endAt);d.push(e.value),b&&(b=e.inclusive)}return new bB(d,b)}(e,d),m=this.Ze(d,e,i),n=this.Ze(d,e,j),o=this.tn(d,e,l),p=this.en(d.indexId,k,m,i.inclusive,n,j.inclusive,o);return av.forEach(p,d=>c.j(d,b.limit).next(b=>{b.forEach(c=>{let b=f.fromSegments(c.documentKey);a.has(b)||(a=a.add(b),g.push(b))})}))}).next(()=>g)}return av.resolve(null)})}Ye(b){let a=this.Je.get(b);return a||(a=[b],this.Je.set(b,a),a)}en(d,a,e,j,f,k,l){let g=(null!=a?a.length:1)*Math.max(e.length,f.length),c=g/(null!=a?a.length:1),h=[];for(let b=0;b<g;++b){let i=a?this.nn(a[b/c]):dR,m=this.sn(d,i,e[b%c],j),n=this.rn(d,i,f[b%c],k),o=l.map(a=>this.sn(d,i,a,!0));h.push(...this.createRange(m,n,o))}return h}sn(b,c,d,e){let a=new dM(b,f.empty(),c,d);return e?a:a.Le()}rn(b,c,d,e){let a=new dM(b,f.empty(),c,d);return e?a.Le():a}Xe(b,a){let d=new dP(a),c=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment();return this.getFieldIndexes(b,c).next(c=>{let a=null;for(let b of c)d.Ge(b)&&(!a||b.fields.length>a.fields.length)&&(a=b);return a})}getIndexType(b,a){let c=2;return av.forEach(this.Ye(a),a=>this.Xe(b,a).next(b=>{b?0!==c&&b.fields.length<function(c){let a=new m(ak.comparator),d=!1;for(let f of c.filters){let b=f;b.field.isKeyField()||("array-contains"===b.op||"array-contains-any"===b.op?d=!0:a=a.add(b.field))}for(let e of c.orderBy)e.field.isKeyField()||(a=a.add(e.field));return a.size+(d?1:0)}(a)&&(c=1):c=0})).next(()=>c)}on(d,e){let a=new dL;for(let b of am(d)){let c=e.data.field(b.fieldPath);if(null==c)return null;let f=a.Be(b.kind);o.ye.re(c,f)}return a.Oe()}nn(b){let a=new dL;return o.ye.re(b,a.Be(0)),a.Oe()}un(b,c){let a=new dL;return o.ye.re(a6(this.databaseId,c),a.Be(function(b){let a=am(b);return 0===a.length?0:a[a.length-1].kind}(b))),a.Oe()}tn(e,f,d){if(null===d)return[];let a=[];a.push(new dL);let g=0;for(let b of am(e)){let c=d[g++];for(let h of a)if(this.cn(f,b.fieldPath)&&a8(c))a=this.an(a,b,c);else{let i=h.Be(b.kind);o.ye.re(c,i)}}return this.hn(a)}Ze(a,b,c){return this.tn(a,b,c.position)}hn(b){let c=[];for(let a=0;a<b.length;++a)c[a]=b[a].Oe();return c}an(c,d,e){let f=[...c],b=[];for(let g of e.arrayValue.values||[])for(let h of f){let a=new dL;a.seed(h.Oe()),o.ye.re(g,a.Be(d.kind)),b.push(a)}return b}cn(a,b){return!!a.filters.find(a=>a instanceof e&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(b,a){let c=dV(b),d=dW(b);return(a?c.K("collectionGroupIndex",IDBKeyRange.bound(a,a)):c.K()).next(a=>{let b=[];return av.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(b,a){let c=a?new ao(a.sequenceNumber,new ar(dx(a.readTime),new f(dg(a.documentKey)),a.largestBatchId)):ao.empty(),d=b.fields.map(([a,b])=>new an(ak.fromServerFormat(a),b));return new v(b.indexId,b.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:u(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=dV(a),e=dW(a);return this.ln(a).next(a=>d.K("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>av.forEach(b,b=>e.put(dE(b.indexId,this.user,a,c)))))}updateIndexEntries(b,a){let c=new Map;return av.forEach(a,(a,e)=>{let d=c.get(a.collectionGroup);return(d?av.resolve(d):this.getFieldIndexes(b,a.collectionGroup)).next(d=>(c.set(a.collectionGroup,d),av.forEach(d,c=>this.fn(b,a,c).next(a=>{let d=this.dn(e,c);return a.isEqual(d)?av.resolve():this._n(b,e,c,a,d)}))))})}wn(c,b,d,a){return dU(c).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.un(d,b.key),documentKey:b.key.path.toArray()})}mn(c,b,d,a){return dU(c).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.un(d,b.key),b.key.path.toArray()])}fn(b,c,a){let d=dU(b),e=new m(dN);return d.J({index:"documentKeyIndex",range:IDBKeyRange.only([a.indexId,this.uid,this.un(a,c)])},(d,b)=>{e=e.add(new dM(a.indexId,c,b.arrayValue,b.directionalValue))}).next(()=>e)}dn(b,c){let a=new m(dN),d=this.on(c,b);if(null==d)return a;let e=al(c);if(null!=e){let f=b.data.field(e.fieldPath);if(a8(f))for(let g of f.arrayValue.values||[])a=a.add(new dM(c.indexId,b.key,this.nn(g),d))}else a=a.add(new dM(c.indexId,b.key,dR,d));return a}_n(e,a,f,b,c){Q("IndexedDbIndexManager","Updating index entries for document '%s'",a.key);let d=[];return function(h,i,j,k,l){let c=h.getIterator(),d=i.getIterator(),a=aM(c),b=aM(d);for(;a||b;){let e=!1,f=!1;if(a&&b){let g=j(a,b);g<0?f=!0:g>0&&(e=!0)}else null!=a?f=!0:e=!0;e?(k(b),b=aM(d)):f?(l(a),a=aM(c)):(a=aM(c),b=aM(d))}}(b,c,dN,b=>{d.push(this.wn(e,a,f,b))},b=>{d.push(this.mn(e,a,f,b))}),av.waitFor(d)}ln(a){let b=1;return dW(a).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(d,a,c)=>{c.done(),b=a.sequenceNumber+1}).next(()=>b)}createRange(d,f,e){e=e.sort((a,b)=>dN(a,b)).filter((b,a,c)=>!a||0!==dN(b,c[a-1]));let a=[];for(let c of(a.push(d),e)){let g=dN(c,d),h=dN(c,f);if(0===g)a[0]=d.Le();else if(g>0&&h<0)a.push(c),a.push(c.Le());else if(h>0)break}a.push(f);let i=[];for(let b=0;b<a.length;b+=2)i.push(IDBKeyRange.bound([a[b].indexId,this.uid,a[b].arrayValue,a[b].directionalValue,dR,[]],[a[b+1].indexId,this.uid,a[b+1].arrayValue,a[b+1].directionalValue,dR,[]]));return i}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(dX)}getMinOffset(b,a){return av.mapArray(this.Ye(a),a=>this.Xe(b,a).next(a=>a||U())).next(dX)}}function dT(a){return dn(a,"collectionParents")}function dU(a){return dn(a,"indexEntries")}function dV(a){return dn(a,"indexConfiguration")}function dW(a){return dn(a,"indexState")}function dX(b){var f;(f=0!==b.length)||U();let a=b[0].indexState.offset,d=a.largestBatchId;for(let e=1;e<b.length;e++){let c=b[e].indexState.offset;0>as(c,a)&&(a=c),d<c.largestBatchId&&(d=c.largestBatchId)}return new ar(a.readTime,a.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dY={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class c{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new c(a,c.DEFAULT_COLLECTION_PERCENTILE,c.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function dZ(c,e,a){let f=c.store("mutations"),g=c.store("documentMutations"),b=[],h=IDBKeyRange.only(a.batchId),l=0,i=f.J({range:h},(b,c,a)=>(l++,a.delete()));b.push(i.next(()=>{var a;(a=1===l)||U()}));let j=[];for(let d of a.mutations){let k=di(e,d.key.path,a.batchId);b.push(g.delete(k)),j.push(d.key)}return av.waitFor(b).next(()=>j)}function d$(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw U();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ c.DEFAULT_COLLECTION_PERCENTILE=10,c.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,c.DEFAULT=new c(41943040,c.DEFAULT_COLLECTION_PERCENTILE,c.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),c.DISABLED=new c(-1,0,0);class d_{constructor(a,b,c,d){this.userId=a,this.wt=b,this.indexManager=c,this.referenceDelegate=d,this.gn={}}static se(a,b,c,d){var e;(e=""!==a.uid)||U();let f=a.isAuthenticated()?a.uid:"";return new d_(f,b,c,d)}checkEmpty(a){let c=!0,b=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return d1(a).J({index:"userMutationsIndex",range:b},(b,d,a)=>{c=!1,a.done()}).next(()=>c)}addMutationBatch(a,c,d,e){let f=d2(a),b=d1(a);return b.add({}).next(g=>{var k;(k="number"==typeof g)||U();let l=new dp(g,c,d,e),n=function(e,b,a){let c=a.baseMutations.map(a=>c0(e.ne,a)),d=a.mutations.map(a=>c0(e.ne,a));return{userId:b,batchId:a.batchId,localWriteTimeMs:a.localWriteTime.toMillis(),baseMutations:c,mutations:d}}(this.wt,this.userId,l),h=[],i=new m((a,b)=>u(a.canonicalString(),b.canonicalString()));for(let j of e){let o=di(this.userId,j.key.path,g);i=i.add(j.key.path.popLast()),h.push(b.put(n)),h.push(f.put(o,dj))}return i.forEach(b=>{h.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.gn[g]=l.keys()}),av.waitFor(h).next(()=>l)})}lookupMutationBatch(a,b){return d1(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||U(),dy(this.wt,a)):null})}yn(b,a){return this.gn[a]?av.resolve(this.gn[a]):this.lookupMutationBatch(b,a).next(b=>{if(b){let c=b.keys();return this.gn[a]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return d1(a).J({index:"userMutationsIndex",range:d},(d,a,b)=>{var f;a.userId===this.userId&&(a.batchId>=c||U(),e=dy(this.wt,a)),b.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return d1(a).J({index:"userMutationsIndex",range:b,reverse:!0},(d,a,b)=>{c=a.batchId,b.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return d1(a).K("userMutationsIndex",b).next(a=>a.map(a=>dy(this.wt,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=dh(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return d2(a).J({range:d},(c,j,d)=>{let[f,g,h]=c,i=dg(g);if(f===this.userId&&b.path.isEqual(i))return d1(a).get(h).next(a=>{var b;if(!a)throw U();a.userId===this.userId||U(),e.push(dy(this.wt,a))});d.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(c,a){let d=new m(u),b=[];return a.forEach(a=>{let e=dh(this.userId,a.path),f=IDBKeyRange.lowerBound(e),g=d2(c).J({range:f},(b,i,c)=>{let[e,f,g]=b,h=dg(f);e===this.userId&&a.path.isEqual(h)?d=d.add(g):c.done()});b.push(g)}),av.waitFor(b).next(()=>this.pn(c,d))}getAllMutationBatchesAffectingQuery(b,c){let a=c.path,f=a.length+1,d=dh(this.userId,a),e=IDBKeyRange.lowerBound(d),g=new m(u);return d2(b).J({range:e},(c,j,d)=>{let[e,h,i]=c,b=dg(h);e===this.userId&&a.isPrefixOf(b)?b.length===f&&(g=g.add(i)):d.done()}).next(()=>this.pn(b,g))}pn(c,a){let d=[],b=[];return a.forEach(a=>{b.push(d1(c).get(a).next(a=>{var b;if(null===a)throw U();a.userId===this.userId||U(),d.push(dy(this.wt,a))}))}),av.waitFor(b).next(()=>d)}removeMutationBatch(a,b){return dZ(a.ee,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.In(b.batchId)}),av.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}In(a){delete this.gn[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return av.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return d2(a).J({range:c},(a,e,b)=>{if(a[0]===this.userId){let c=dg(a[1]);d.push(c)}else b.done()}).next(()=>{var a;(a=0===d.length)||U()})})}containsKey(a,b){return d0(a,this.userId,b)}Tn(a){return d3(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function d0(b,c,d){let a=dh(c,d.path),f=a[1],e=IDBKeyRange.lowerBound(a),g=!1;return d2(b).J({range:e,H:!0},(a,h,b)=>{let[d,e,i]=a;d===c&&e===f&&(g=!0),b.done()}).next(()=>g)}function d1(a){return dn(a,"mutations")}function d2(a){return dn(a,"documentMutations")}function d3(a){return dn(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class d4{constructor(a){this.En=a}next(){return this.En+=2,this.En}static An(){return new d4(0)}static Rn(){return new d4(-1)}}function d5(a){return dn(a,"targets")}function d6(a){return dn(a,"targetGlobal")}function d7(a){return dn(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d8([b,c],[d,e]){let a=u(b,d);return 0===a?u(c,e):a}class d9{constructor(a){this.Sn=a,this.buffer=new m(d8),this.Dn=0}Cn(){return++this.Dn}xn(c){let a=[c,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(a);else{let b=this.buffer.last();0>d8(a,b)&&(this.buffer=this.buffer.delete(b).add(a))}}get maxValue(){return this.buffer.last()[0]}}class ea{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(a){Q("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){aA(a)?Q("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await au(a)}await this.kn(3e5)})}}function eb(a,d){var b,c;return d7(a).put((b=d,c=a.currentSequenceNumber,{targetId:0,path:de(b.path),sequenceNumber:c}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class B{constructor(){this.changes=new cr(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,bk.newInvalidDocument(a).setReadTime(b))}getEntry(c,a){this.assertNotApplied();let b=this.changes.get(a);return void 0!==b?av.resolve(b):this.getFromCache(c,a)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class ec{constructor(a){this.wt=a}setIndexManager(a){this.indexManager=a}addEntry(a,c,b){return eg(a).put(b)}removeEntry(a,b,c){return eg(a).delete(function(b,c){let a=b.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],dv(c),a[a.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.qn(a,c)))}getEntry(b,a){let c=bk.newInvalidDocument(a);return eg(b).J({index:"documentKeyIndex",range:IDBKeyRange.only(eh(a))},(d,b)=>{c=this.Kn(a,b)}).next(()=>c)}Gn(b,a){let c={size:0,document:bk.newInvalidDocument(a)};return eg(b).J({index:"documentKeyIndex",range:IDBKeyRange.only(eh(a))},(d,b)=>{c={document:this.Kn(a,b),size:d$(b)}}).next(()=>c)}getEntries(a,b){let c=cs;return this.Qn(a,b,(a,b)=>{let d=this.Kn(a,b);c=c.insert(a,d)}).next(()=>c)}jn(a,b){let c=cs,d=new j(f.comparator);return this.Qn(a,b,(a,b)=>{let e=this.Kn(a,b);c=c.insert(a,e),d=d.insert(a,d$(b))}).next(()=>({documents:c,Wn:d}))}Qn(c,b,g){if(b.isEmpty())return av.resolve();let a=new m(ej);b.forEach(b=>a=a.add(b));let d=IDBKeyRange.bound(eh(a.first()),eh(a.last())),e=a.getIterator(),h=e.getNext();return eg(c).J({index:"documentKeyIndex",range:d},(d,a,b)=>{let c=f.fromSegments([...a.prefixPath,a.collectionGroup,a.documentId]);for(;h&&0>ej(h,c);)g(h,null),h=e.getNext();h&&h.isEqual(c)&&(g(h,a),h=e.hasNext()?e.getNext():null),h?b.q(eh(h)):b.done()}).next(()=>{for(;h;)g(h,null),h=e.hasNext()?e.getNext():null})}getAllFromCollection(c,a,b){let d=[a.popLast().toArray(),a.lastSegment(),dv(b.readTime),b.documentKey.path.isEmpty()?"":b.documentKey.path.lastSegment()],e=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return eg(c).K(IDBKeyRange.bound(d,e,!0)).next(d=>{let b=cs;for(let a of d){let c=this.Kn(f.fromSegments(a.prefixPath.concat(a.collectionGroup,a.documentId)),a);b=b.insert(c.key,c)}return b})}getAllFromCollectionGroup(b,a,c,g){let h=cs,d=ei(a,c),e=ei(a,ar.max());return eg(b).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(d,e,!0)},(d,a,c)=>{let b=this.Kn(f.fromSegments(a.prefixPath.concat(a.collectionGroup,a.documentId)),a);(h=h.insert(b.key,b)).size===g&&c.done()}).next(()=>h)}newChangeBuffer(a){return new ee(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return ef(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&U(),a})}qn(a,b){return ef(a).put("remoteDocumentGlobalKey",b)}Kn(c,b){if(b){let a=function(c,a){let b;if(a.document)b=c_(c.ne,a.document,!!a.hasCommittedMutations);else if(a.noDocument){let d=f.fromSegments(a.noDocument.path),e=dx(a.noDocument.readTime);b=bk.newNoDocument(d,e),a.hasCommittedMutations&&b.setHasCommittedMutations()}else{if(!a.unknownDocument)return U();{let g=f.fromSegments(a.unknownDocument.path),h=dx(a.unknownDocument.version);b=bk.newUnknownDocument(g,h)}}return a.readTime&&b.setReadTime(function(a){let b=new ag(a[0],a[1]);return ah.fromTimestamp(b)}(a.readTime)),b}(this.wt,b);if(!(a.isNoDocument()&&a.version.isEqual(ah.min())))return a}return bk.newInvalidDocument(c)}}function ed(a){return new ec(a)}class ee extends null{constructor(a,b){super(),this.zn=a,this.trackRemovals=b,this.Hn=new cr(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(b){let a=[],c=0,d=new m((a,b)=>u(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Hn.get(e);if(a.push(this.zn.removeEntry(b,e,g.readTime)),f.isValidDocument()){let h=du(this.zn.wt,f);d=d.add(e.path.popLast());let i=d$(h);c+=i-g.size,a.push(this.zn.addEntry(b,e,h))}else if(c-=g.size,this.trackRemovals){let j=du(this.zn.wt,f.convertToNoDocument(ah.min()));a.push(this.zn.addEntry(b,e,j))}}),d.forEach(c=>{a.push(this.zn.indexManager.addToCollectionParentIndex(b,c))}),a.push(this.zn.updateMetadata(b,c)),av.waitFor(a)}getFromCache(a,b){return this.zn.Gn(a,b).next(a=>(this.Hn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.zn.jn(a,b).next(({documents:a,Wn:b})=>(b.forEach((b,c)=>{this.Hn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function ef(a){return dn(a,"remoteDocumentGlobal")}function eg(a){return dn(a,"remoteDocumentsV14")}function eh(b){let a=b.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],a[a.length-1]]}function ei(c,b){let a=b.documentKey.path.toArray();return[c,dv(b.readTime),a.slice(0,a.length-2),a.length>0?a[a.length-1]:""]}function ej(e,f){let a=e.path.toArray(),b=f.path.toArray(),d=0;for(let c=0;c<a.length-2&&c<b.length-2;++c)if(d=u(a[c],b[c]))return d;return(d=u(a.length,b.length))||(d=u(a[a.length-2],b[b.length-2]))||u(a[a.length-1],b[b.length-1])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class ek{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class el{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&ce(c.mutation,a,aN.empty(),ag.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,cB()).next(()=>b))}getLocalViewOfDocuments(a,b,d=cB()){let c=cw();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,d).next(a=>{let b=cu();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=cw();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,cB()))}populateOverlays(a,d,b){let c=[];return b.forEach(a=>{d.has(a)||c.push(a)}),this.documentOverlayCache.getOverlays(a,c).next(a=>{a.forEach((a,b)=>{d.set(a,b)})})}computeViews(a,b,d,e){let c=cs,f=cy(),g=cy();return b.forEach((g,a)=>{let b=d.get(a.key);e.has(a.key)&&(void 0===b||b.mutation instanceof ci)?c=c.insert(a.key,a):void 0!==b&&(f.set(a.key,b.mutation.getFieldMask()),ce(b.mutation,a,b.mutation.getFieldMask(),ag.now()))}),this.recalculateAndSaveOverlays(a,c).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((b,c)=>{var a;return g.set(b,new ek(c,null!==(a=f.get(b))&& void 0!==a?a:null))}),g))}recalculateAndSaveOverlays(a,b){let c=cy(),d=new j((a,b)=>a-b),e=cB();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let g=b.get(a);if(null===g)return;let f=c.get(a)||aN.empty();f=e.applyToLocalView(g,f),c.set(a,f);let h=(d.get(e.batchId)||cB()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=cx();j.forEach(a=>{if(!e.has(a)){let d=cc(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return av.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(c,a,d){var b;return(b=a,f.isDocumentKey(b.path)&&null===b.collectionGroup&&0===b.filters.length)?this.getDocumentsMatchingDocumentQuery(c,a.path):bL(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,d):this.getDocumentsMatchingCollectionQuery(c,a,d)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):av.resolve(cw()),g=-1,h=e;return f.next(b=>av.forEach(b,(c,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),e.get(c)?av.resolve():this.getBaseDocument(a,c,b).next(a=>{h=h.insert(c,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,cB())).next(a=>({batchId:g,changes:cv(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new f(b)).next(a=>{let b=cu();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,d){let c=b.collectionGroup,e=cu();return this.indexManager.getCollectionParents(a,c).next(f=>av.forEach(f,h=>{var f,g;let i=(f=b,g=h.child(c),new bG(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,d).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((c,b)=>{let a=b.getKey();null===d.get(a)&&(d=d.insert(a,bk.newInvalidDocument(a)))});let c=cu();return d.forEach((e,d)=>{let f=a.get(e);void 0!==f&&ce(f.mutation,d,aN.empty(),ag.now()),bS(b,d)&&(c=c.insert(e,d))}),c})}getBaseDocument(c,a,b){return null===b||1===b.mutation.type?this.remoteDocumentCache.getEntry(c,a):av.resolve(bk.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class em{constructor(){this.overlays=new j(f.comparator),this.Xn=new Map}getOverlay(b,a){return av.resolve(this.overlays.get(a))}getOverlays(b,a){let c=cw();return av.forEach(a,a=>this.getOverlay(b,a).next(b=>{null!==b&&c.set(a,b)})).next(()=>c)}saveOverlays(b,c,a){return a.forEach((d,a)=>{this.ie(b,c,a)}),av.resolve()}removeOverlaysForBatchId(c,d,a){let b=this.Xn.get(a);return void 0!==b&&(b.forEach(a=>this.overlays=this.overlays.remove(a)),this.Xn.delete(a)),av.resolve()}getOverlaysForCollection(j,b,g){let c=cw(),h=b.length+1,i=new f(b.child("")),d=this.overlays.getIteratorFrom(i);for(;d.hasNext();){let a=d.getNext().value,e=a.getKey();if(!b.isPrefixOf(e.path))break;e.path.length===h&&a.largestBatchId>g&&c.set(a.getKey(),a)}return av.resolve(c)}getOverlaysForCollectionGroup(k,g,h,i){let b=new j((a,b)=>a-b),d=this.overlays.getIterator();for(;d.hasNext();){let a=d.getNext().value;if(a.getKey().getCollectionGroup()===g&&a.largestBatchId>h){let c=b.get(a.largestBatchId);null===c&&(c=cw(),b=b.insert(a.largestBatchId,c)),c.set(a.getKey(),a)}}let e=cw(),f=b.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((a,b)=>e.set(a,b)),!(e.size()>=i)););return av.resolve(e)}ie(f,b,a){let d=this.overlays.get(a.key);if(null!==d){let e=this.Xn.get(d.largestBatchId).delete(a.key);this.Xn.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(a.key,new dr(b,a));let c=this.Xn.get(b);void 0===c&&(c=cB(),this.Xn.set(b,c)),this.Xn.set(b,c.add(a.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class en{constructor(){this.Zn=new m(eo.ts),this.es=new m(eo.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(b,c){let a=new eo(b,c);this.Zn=this.Zn.add(a),this.es=this.es.add(a)}ss(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.rs(new eo(a,b))}os(a,b){a.forEach(a=>this.removeReference(a,b))}us(a){let b=new f(new ai([])),c=new eo(b,a),d=new eo(b,a+1),e=[];return this.es.forEachInRange([c,d],a=>{this.rs(a),e.push(a.key)}),e}cs(){this.Zn.forEach(a=>this.rs(a))}rs(a){this.Zn=this.Zn.delete(a),this.es=this.es.delete(a)}hs(a){let b=new f(new ai([])),c=new eo(b,a),d=new eo(b,a+1),e=cB();return this.es.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let c=new eo(a,0),b=this.Zn.firstAfterOrEqual(c);return null!==b&&a.isEqual(b.key)}}class eo{constructor(a,b){this.key=a,this.ls=b}static ts(a,b){return f.comparator(a.key,b.key)||u(a.ls,b.ls)}static ns(a,b){return u(a.ls,b.ls)||f.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ep{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.fs=1,this.ds=new m(eo.ts)}checkEmpty(a){return av.resolve(0===this.mutationQueue.length)}addMutationBatch(e,f,g,a){let b=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let c=new dp(b,f,g,a);for(let d of(this.mutationQueue.push(c),a))this.ds=this.ds.add(new eo(d.key,b)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return av.resolve(c)}lookupMutationBatch(b,a){return av.resolve(this._s(a))}getNextMutationBatchAfterBatchId(d,c){let a=this.ws(c+1),b=a<0?0:a;return av.resolve(this.mutationQueue.length>b?this.mutationQueue[b]:null)}getHighestUnacknowledgedBatchId(){return av.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(a){return av.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,a){let b=new eo(a,0),c=new eo(a,Number.POSITIVE_INFINITY),d=[];return this.ds.forEachInRange([b,c],a=>{let b=this._s(a.ls);d.push(b)}),av.resolve(d)}getAllMutationBatchesAffectingDocumentKeys(c,a){let b=new m(u);return a.forEach(a=>{let c=new eo(a,0),d=new eo(a,Number.POSITIVE_INFINITY);this.ds.forEachInRange([c,d],a=>{b=b.add(a.ls)})}),av.resolve(this.gs(b))}getAllMutationBatchesAffectingQuery(g,c){let b=c.path,h=b.length+1,a=b;f.isDocumentKey(a)||(a=a.child(""));let d=new eo(new f(a),0),e=new m(u);return this.ds.forEachWhile(a=>{let c=a.key.path;return!!b.isPrefixOf(c)&&(c.length===h&&(e=e.add(a.ls)),!0)},d),av.resolve(this.gs(e))}gs(a){let b=[];return a.forEach(c=>{let a=this._s(c);null!==a&&b.push(a)}),b}removeMutationBatch(b,a){var c;0===this.ys(a.batchId,"removed")||U(),this.mutationQueue.shift();let d=this.ds;return av.forEach(a.mutations,c=>{let e=new eo(c.key,a.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(b,c.key)}).next(()=>{this.ds=d})}In(a){}containsKey(d,a){let c=new eo(a,0),b=this.ds.firstAfterOrEqual(c);return av.resolve(a.isEqual(b&&b.key))}performConsistencyCheck(a){return this.mutationQueue.length,av.resolve()}ys(a,b){return this.ws(a)}ws(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}_s(b){let a=this.ws(b);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class eq{constructor(a){this.ps=a,this.docs=new j(f.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(e,a){let b=a.key,c=this.docs.get(b),f=c?c.size:0,d=this.ps(a);return this.docs=this.docs.insert(b,{document:a.mutableCopy(),size:d}),this.size+=d-f,this.indexManager.addToCollectionParentIndex(e,b.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(c,a){let b=this.docs.get(a);return av.resolve(b?b.document.mutableCopy():bk.newInvalidDocument(a))}getEntries(c,a){let b=cs;return a.forEach(a=>{let c=this.docs.get(a);b=b.insert(a,c?c.document.mutableCopy():bk.newInvalidDocument(a))}),av.resolve(b)}getAllFromCollection(i,a,g){let b=cs,h=new f(a.child("")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){let{key:e,value:{document:c}}=d.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||0>=as(aq(c),g)||(b=b.insert(c.key,c.mutableCopy()))}return av.resolve(b)}getAllFromCollectionGroup(a,b,c,d){U()}Is(a,b){return av.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new er(this)}getSize(a){return av.resolve(this.size)}}class er extends B{constructor(a){super(),this.zn=a}applyChanges(b){let a=[];return this.changes.forEach((d,c)=>{c.isValidDocument()?a.push(this.zn.addEntry(b,c)):this.zn.removeEntry(d)}),av.waitFor(a)}getFromCache(a,b){return this.zn.getEntry(a,b)}getAllFromCache(a,b){return this.zn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class es{constructor(a,b){this.bs={},this.overlays={},this.Ps=new x(0),this.vs=!1,this.vs=!0,this.referenceDelegate=a(this),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Ts=new cr(a=>bn(a),bo),this.lastRemoteSnapshotVersion=ah.min(),this.highestTargetId=0,this.Es=0,this.As=new en,this.targetCount=0,this.Rs=d4.An()}forEachTarget(a,b){return this.Ts.forEach((c,a)=>b(a)),av.resolve()}getLastRemoteSnapshotVersion(a){return av.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return av.resolve(this.Es)}allocateTargetId(a){return this.highestTargetId=this.Rs.next(),av.resolve(this.highestTargetId)}setTargetsMetadata(c,a,b){return b&&(this.lastRemoteSnapshotVersion=b),a>this.Es&&(this.Es=a),av.resolve()}vn(a){this.Ts.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.Rs=new d4(b),this.highestTargetId=b),a.sequenceNumber>this.Es&&(this.Es=a.sequenceNumber)}addTargetData(b,a){return this.vn(a),this.targetCount+=1,av.resolve()}updateTargetData(b,a){return this.vn(a),av.resolve()}removeTargetData(b,a){return this.Ts.delete(a.target),this.As.us(a.targetId),this.targetCount-=1,av.resolve()}removeTargets(b,c,d){let e=0,a=[];return this.Ts.forEach((g,f)=>{f.sequenceNumber<=c&&null===d.get(f.targetId)&&(this.Ts.delete(g),a.push(this.removeMatchingKeysForTargetId(b,f.targetId)),e++)}),av.waitFor(a).next(()=>e)}getTargetCount(a){return av.resolve(this.targetCount)}getTargetData(c,a){let b=this.Ts.get(a)||null;return av.resolve(b)}addMatchingKeys(c,a,b){return this.As.ss(a,b),av.resolve()}removeMatchingKeys(e,a,b){this.As.os(a,b);let c=this.persistence.referenceDelegate,d=[];return c&&a.forEach(a=>{d.push(c.markPotentiallyOrphaned(e,a))}),av.waitFor(d)}removeMatchingKeysForTargetId(b,a){return this.As.us(a),av.resolve()}getMatchingKeysForTargetId(c,a){let b=this.As.hs(a);return av.resolve(b)}containsKey(b,a){return av.resolve(this.As.containsKey(a))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.ze=new dQ}addToCollectionParentIndex(b,a){return this.ze.add(a),av.resolve()}getCollectionParents(b,a){return av.resolve(this.ze.getEntries(a))}addFieldIndex(a,b){return av.resolve()}deleteFieldIndex(a,b){return av.resolve()}getDocumentsMatchingTarget(a,b){return av.resolve(null)}getIndexType(a,b){return av.resolve(0)}getFieldIndexes(a,b){return av.resolve([])}getNextCollectionGroupToUpdate(a){return av.resolve(null)}getMinOffset(a,b){return av.resolve(ar.min())}getMinOffsetFromCollectionGroup(a,b){return av.resolve(ar.min())}updateCollectionGroup(a,b,c){return av.resolve()}updateIndexEntries(a,b){return av.resolve()}},this.remoteDocumentCache=function(a){return new eq(a)}(a=>this.referenceDelegate.Ss(a)),this.wt=new dt(b),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.wt=a,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(b,a){return av.resolve(this.Jn.get(a))}saveBundleMetadata(c,b){var a;return this.Jn.set(b.id,{id:(a=b).id,version:a.version,createTime:cR(a.createTime)}),av.resolve()}getNamedQuery(b,a){return av.resolve(this.Yn.get(a))}saveNamedQuery(c,b){var a;return this.Yn.set(b.name,{name:(a=b).name,query:dB(a.bundledQuery),readTime:cR(a.readTime)}),av.resolve()}}(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(b){let a=this.overlays[b.toKey()];return a||(a=new em,this.overlays[b.toKey()]=a),a}getMutationQueue(b,c){let a=this.bs[b.toKey()];return a||(a=new ep(c,this.referenceDelegate),this.bs[b.toKey()]=a),a}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(a,d,b){Q("MemoryPersistence","Starting transaction:",a);let c=new et(this.Ps.next());return this.referenceDelegate.Cs(),b(c).next(a=>this.referenceDelegate.xs(c).next(()=>a)).toPromise().then(a=>(c.raiseOnCommittedEvent(),a))}Ns(a,b){return av.or(Object.values(this.bs).map(c=>()=>c.containsKey(a,b)))}}class et extends w{constructor(a){super(),this.currentSequenceNumber=a}}class eu{constructor(a){this.persistence=a,this.ks=new en,this.Os=null}static Ms(a){return new eu(a)}get Fs(){if(this.Os)return this.Os;throw U()}addReference(c,b,a){return this.ks.addReference(a,b),this.Fs.delete(a.toString()),av.resolve()}removeReference(c,b,a){return this.ks.removeReference(a,b),this.Fs.add(a.toString()),av.resolve()}markPotentiallyOrphaned(b,a){return this.Fs.add(a.toString()),av.resolve()}removeTarget(b,a){this.ks.us(a.targetId).forEach(a=>this.Fs.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(b,a.targetId).next(a=>{a.forEach(a=>this.Fs.add(a.toString()))}).next(()=>c.removeTargetData(b,a))}Cs(){this.Os=new Set}xs(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return av.forEach(this.Fs,c=>{let d=f.fromPath(c);return this.$s(a,d).next(a=>{a||b.removeEntry(d,ah.min())})}).next(()=>(this.Os=null,b.apply(a)))}updateLimboDocument(a,b){return this.$s(a,b).next(a=>{a?this.Fs.delete(b.toString()):this.Fs.add(b.toString())})}Ss(a){return 0}$s(a,b){return av.or([()=>av.resolve(this.ks.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Ns(a,b)])}}function ev(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let ew="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ex{constructor(d,a,e,g,h,i,j,k,l,c,m=14){if(this.allowTabSynchronization=d,this.persistenceKey=a,this.clientId=e,this.js=h,this.window=i,this.document=j,this.Ws=l,this.zs=c,this.Hs=m,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=a=>Promise.resolve(),!ex.V())throw new W(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(c,d){var a,b;this.db=c,this.garbageCollector=(a=this,b=d,new class a{constructor(a,b){this.On=a,this.params=b}calculateTargetCount(a,b){return this.On.Mn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(b,a){if(0===a)return av.resolve(x.ot);let c=new d9(a);return this.On.forEachTarget(b,a=>c.xn(a.sequenceNumber)).next(()=>this.On.Fn(b,a=>c.xn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.On.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.On.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),av.resolve(dY)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dY):this.$n(a,b))}getCacheSize(a){return this.On.getCacheSize(a)}$n(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),P()<=LogLevel.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),av.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(a,b))}Mn(a){let b=this.Bn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Bn(a){let b=0;return this.Fn(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Fn(a,b){return this.Ln(a,(c,a)=>b(a))}addReference(a,c,b){return eb(a,b)}removeReference(a,c,b){return eb(a,b)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return eb(a,b)}Un(b,c){var a,d;let e;return a=b,d=c,e=!1,d3(a).Y(b=>d0(a,b,d).next(a=>(a&&(e=!0),av.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Ln(a,(f,g)=>{if(g<=b){let h=this.Un(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,ah.min()),d7(a).delete([0,de(f.path)])))});d.push(h)}}).next(()=>av.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return eb(a,b)}Ln(a,c){let b=d7(a),d,e=x.ot;return b.J({index:"documentTargetsIndex"},([a,h],{path:b,sequenceNumber:g})=>{0===a?(e!==x.ot&&c(new f(dg(d)),e),e=g,d=b):e=x.ot}).next(()=>{e!==x.ot&&c(new f(dg(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,g),this.ei=a+"main",this.wt=new dt(k),this.ni=new ax(this.ei,this.Hs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.wt=a}O(d,g,b,c){var e,f;let h=new aw("createOrUpgrade",g);b<1&&c>=1&&(function(a){a.createObjectStore("owner")}(d),(e=d).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),ev(d),function(a){a.createObjectStore("remoteDocuments")}(d));let a=av.resolve();return b<3&&c>=3&&(0!==b&&((f=d).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),ev(d)),a=a.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ah.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(h))),b<4&&c>=4&&(0!==b&&(a=a.next(()=>{var a,b;return a=d,(b=h).store("mutations").K().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let e=b.store("mutations"),d=c.map(a=>e.put(a));return av.waitFor(d)})})),a=a.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(d)})),b<5&&c>=5&&(a=a.next(()=>this.Bs(h))),b<6&&c>=6&&(a=a.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(d),this.Ls(h)))),b<7&&c>=7&&(a=a.next(()=>this.Us(h))),b<8&&c>=8&&(a=a.next(()=>this.qs(d,h))),b<9&&c>=9&&(a=a.next(()=>{var a;(a=d).objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})),b<10&&c>=10&&(a=a.next(()=>this.Ks(h))),b<11&&c>=11&&(a=a.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(d),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(d)})),b<12&&c>=12&&(a=a.next(()=>{!function(b){let a=b.createObjectStore("documentOverlays",{keyPath:null});a.createIndex("collectionPathOverlayIndex",null,{unique:!1}),a.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(d)})),b<13&&c>=13&&(a=a.next(()=>(function(b){let a=b.createObjectStore("remoteDocumentsV14",{keyPath:null});a.createIndex("documentKeyIndex",null),a.createIndex("collectionGroupIndex",null)})(d)).next(()=>this.Gs(d,h)).next(()=>d.deleteObjectStore("remoteDocuments"))),b<14&&c>=14&&(a=a.next(()=>this.Qs(d,h))),b<15&&c>=15&&(a=a.next(()=>{var a;(a=d).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),a}Ls(a){let b=0;return a.store("remoteDocuments").J((c,a)=>{b+=d$(a)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}Bs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.K().next(b=>av.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.K("userMutationsIndex",d).next(c=>av.forEach(c,c=>{var d;(d=c.userId===b.userId)||U();let e=dy(this.wt,c);return dZ(a,b.userId,e).next(()=>{})}))}))}Us(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.J((c,h)=>{var e;let f=new ai(c),g=[0,de(e=f)];d.push(b.get(g).next(d=>{var c;return d?av.resolve():(c=f,b.put({targetId:0,path:de(c),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>av.waitFor(d))})}qs(b,a){b.createObjectStore("collectionParents",{keyPath:null});let c=a.store("collectionParents"),d=new dQ,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:de(e)})}};return a.store("remoteDocuments").J({H:!0},(a,c)=>{let b=new ai(a);return e(b.popLast())}).next(()=>a.store("documentMutations").J({H:!0},([c,a,d],f)=>{let b=dg(a);return e(b.popLast())}))}Ks(a){let b=a.store("targets");return b.J((e,a)=>{let c=dz(a),d=dA(this.wt,c);return b.put(d)})}Gs(c,a){let b=a.store("remoteDocuments"),d=[];return b.J((i,b)=>{var c;let g=a.store("remoteDocumentsV14"),e=((c=b).document?new f(ai.fromString(c.document.name).popFirst(5)):c.noDocument?f.fromSegments(c.noDocument.path):c.unknownDocument?f.fromSegments(c.unknownDocument.path):U()).path.toArray(),h={prefixPath:e.slice(0,e.length-2),collectionGroup:e[e.length-2],documentId:e[e.length-1],readTime:b.readTime||[0,0],unknownDocument:b.unknownDocument,noDocument:b.noDocument,document:b.document,hasCommittedMutations:!!b.hasCommittedMutations};d.push(g.put(h))}).next(()=>av.waitFor(d))}Qs(d,a){let c=a.store("mutations"),e=ed(this.wt),f=new es(eu.Ms,this.wt.ne);return c.K().next(c=>{let d=new Map;return c.forEach(a=>{var b;let c=null!==(b=d.get(a.userId))&& void 0!==b?b:cB();dy(this.wt,a).keys().forEach(a=>c=c.add(a)),d.set(a.userId,c)}),av.forEach(d,(g,h)=>{let c=new b(h),i=dH.se(this.wt,c),d=f.getIndexManager(c),j=d_.se(c,this.wt,d,f.referenceDelegate);return new el(e,j,i,d).recalculateAndSaveOverlaysForDocumentKeys(new dm(a,x.ot),g).next()})})}}(this.wt)),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.wt=b}allocateTargetId(a){return this.bn(a).next(b=>{let c=new d4(b.highestTargetId);return b.highestTargetId=c.next(),this.Pn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.bn(a).next(a=>ah.fromTimestamp(new ag(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.bn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.bn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Pn(a,d)))}addTargetData(a,b){return this.vn(a,b).next(()=>this.bn(a).next(c=>(c.targetCount+=1,this.Vn(b,c),this.Pn(a,c))))}updateTargetData(a,b){return this.vn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>d5(a).delete(b.targetId)).next(()=>this.bn(a)).next(b=>{var c;return b.targetCount>0||U(),b.targetCount-=1,this.Pn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return d5(a).J((h,g)=>{let f=dz(g);f.sequenceNumber<=b&&null===c.get(f.targetId)&&(d++,e.push(this.removeTargetData(a,f)))}).next(()=>av.waitFor(e)).next(()=>d)}forEachTarget(a,b){return d5(a).J((d,a)=>{let c=dz(a);b(c)})}bn(a){return d6(a).get("targetGlobalKey").next(a=>{var b;return null!==a||U(),a})}Pn(a,b){return d6(a).put("targetGlobalKey",b)}vn(a,b){return d5(a).put(dA(this.wt,b))}Vn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.bn(a).next(a=>a.targetCount)}getTargetData(b,c){let a=bn(c),d=IDBKeyRange.bound([a,Number.NEGATIVE_INFINITY],[a,Number.POSITIVE_INFINITY]),e=null;return d5(b).J({range:d,index:"queryTargetsIndex"},(f,b,d)=>{let a=dz(b);bo(c,a.target)&&(e=a,d.done())}).next(()=>e)}addMatchingKeys(a,b,d){let c=[],e=d7(a);return b.forEach(b=>{let f=de(b.path);c.push(e.put({targetId:d,path:f})),c.push(this.referenceDelegate.addReference(a,d,b))}),av.waitFor(c)}removeMatchingKeys(a,b,c){let d=d7(a);return av.forEach(b,b=>{let e=de(b.path);return av.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(b,a){let c=d7(b),d=IDBKeyRange.bound([a],[a+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(b,a){let c=IDBKeyRange.bound([a],[a+1],!1,!0),d=d7(b),e=cB();return d.J({range:c,H:!0},(a,d,g)=>{let b=dg(a[1]),c=new f(b);e=e.add(c)}).next(()=>e)}containsKey(b,c){var d;let a=de(c.path),e=IDBKeyRange.bound([a],[(d=a)+"\0"],!1,!0),f=0;return d7(b).J({index:"documentTargetsIndex",H:!0,range:e},([a,c],d,b)=>{0!==a&&(f++,b.done())}).next(()=>f>0)}te(a,b){return d5(a).get(b).next(a=>a?dz(a):null)}}(this.referenceDelegate,this.wt),this.remoteDocumentCache=ed(this.wt),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return dF(a).get(b).next(b=>{var a;if(b)return{id:(a=b).bundleId,createTime:dx(a.createTime),version:a.version}})}saveBundleMetadata(b,c){var a;return dF(b).put({bundleId:(a=c).id,createTime:dw(cR(a.createTime)),version:a.version})}getNamedQuery(a,b){return dG(a).get(b).next(b=>{var a;if(b)return{name:(a=b).name,query:dB(a.bundledQuery),readTime:dx(a.readTime)}})}saveNamedQuery(b,c){var a;return dG(b).put({name:(a=c).name,readTime:dw(cR(a.readTime)),bundledQuery:a.bundledQuery})}},this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===c&&R("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new W(V.FAILED_PRECONDITION,ew);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Vs.getHighestSequenceNumber(a))}).then(a=>{this.Ps=new x(a,this.Ws)}).then(()=>{this.vs=!0}).catch(a=>(this.ni&&this.ni.close(),Promise.reject(a)))}ci(a){return this.ti=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ni.F(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>ez(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(a).next(a=>{a||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(a)).next(b=>this.isPrimary&&!b?this.li(a).next(()=>!1):!!b&&this.fi(a).next(()=>!0))).catch(a=>{if(aA(a))return Q("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return Q("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.js.enqueueRetryable(()=>this.ti(a)),this.isPrimary=a})}ai(a){return ey(a).get("owner").next(a=>av.resolve(this.di(a)))}_i(a){return ez(a).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=dn(a,"clientMetadata");return b.K().next(a=>{let d=this.gi(a,18e5),c=a.filter(a=>-1===d.indexOf(a));return av.forEach(c,a=>b.delete(a.clientId)).next(()=>c)})}).catch(()=>[]);if(this.si)for(let b of a)this.si.removeItem(this.yi(b.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(a){return!!a&&a.ownerId===this.clientId}hi(a){return this.zs?av.resolve(!0):ey(a).get("owner").next(b=>{if(null!==b&&this.mi(b.leaseTimestampMs,5e3)&&!this.pi(b.ownerId)){if(this.di(b)&&this.networkEnabled)return!0;if(!this.di(b)){if(!b.allowTabSynchronization)throw new W(V.FAILED_PRECONDITION,ew);return!1}}return!(!this.networkEnabled||!this.inForeground)||ez(a).K().next(a=>void 0===this.gi(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&Q("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new dm(a,x.ot);return this.li(b).next(()=>this._i(b))}),this.ni.close(),this.Ai()}gi(a,b){return a.filter(a=>this.mi(a.updateTimeMs,b)&&!this.pi(a.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",a=>ez(a).K().next(a=>this.gi(a,18e5).map(a=>a.clientId)))}get started(){return this.vs}getMutationQueue(a,b){return d_.se(a,this.wt,b,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new dS(a,this.wt.ne.databaseId)}getDocumentOverlayCache(a){return dH.se(this.wt,a)}getBundleCache(){return this.Ds}runTransaction(b,c,e){var a;Q("IndexedDbPersistence","Starting transaction:",b);let d=15===(a=this.Hs)?dl:14===a?A:13===a?z:12===a?dk:11===a?y:void U(),f;return this.ni.runTransaction(b,"readonly"===c?"readonly":"readwrite",d,a=>(f=new dm(a,this.Ps?this.Ps.next():x.ot),"readwrite-primary"===c?this.ai(f).next(a=>!!a||this.hi(f)).next(a=>{if(!a)throw R(`Failed to obtain primary lease for action '${b}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new W(V.FAILED_PRECONDITION,at);return e(f)}).next(a=>this.fi(f).next(()=>a)):this.bi(f).next(()=>e(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}bi(a){return ey(a).get("owner").next(a=>{if(null!==a&&this.mi(a.leaseTimestampMs,5e3)&&!this.pi(a.ownerId)&&!this.di(a)&&!(this.zs||this.allowTabSynchronization&&a.allowTabSynchronization))throw new W(V.FAILED_PRECONDITION,ew)})}fi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ey(a).put("owner",b)}static V(){return ax.V()}li(a){let b=ey(a);return b.get("owner").next(a=>this.di(a)?(Q("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):av.resolve())}mi(a,c){let b=Date.now();return!(a<b-c)&&(!(a>b)||(R(`Detected an update time that is in the future: ${a} > ${b}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Js=()=>{this.Ii(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(b){var a;try{let c=null!==(null===(a=this.si)|| void 0===a?void 0:a.getItem(this.yi(b)));return Q("IndexedDbPersistence",`Client '${b}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return R("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(a){R("Failed to set zombie client id.",a)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(a){}}yi(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function ey(a){return dn(a,"owner")}function ez(a){return dn(a,"clientMetadata")}function eA(a,c){let b=a.projectId;return a.isDefaultDatabase||(b+="."+a.database),"firestore/"+c+"/"+b+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class eB{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Pi=c,this.vi=d}static Vi(e,d){let a=cB(),b=cB();for(let c of d.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:b=b.add(c.doc.key)}return new eB(e,d.fromCache,a,b)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class eC{constructor(){this.Si=!1}initialize(a,b){this.Di=a,this.indexManager=b,this.Si=!0}getDocumentsMatchingQuery(a,b,c,d){return this.Ci(a,b).next(e=>e||this.xi(a,b,d,c)).next(c=>c||this.Ni(a,b))}Ci(a,b){return av.resolve(null)}xi(b,c,d,e){var a;return 0===(a=c).filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())||e.isEqual(ah.min())?this.Ni(b,c):this.Di.getDocuments(b,d).next(f=>{let a=this.ki(c,f);return this.Oi(c,a,d,e)?this.Ni(b,c):(P()<=s.in.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",e.toString(),bR(c)),this.Mi(b,a,c,ap(e,-1)))})}ki(a,b){let c=new m(bU(a));return b.forEach((d,b)=>{bS(a,b)&&(c=c.add(b))}),c}Oi(c,a,d,e){if(null===c.limit)return!1;if(d.size!==a.size)return!0;let b="F"===c.limitType?a.last():a.first();return!!b&&(b.hasPendingWrites||b.version.compareTo(e)>0)}Ni(b,a){return P()<=s.in.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",bR(a)),this.Di.getDocumentsMatchingQuery(b,a,ar.min())}Mi(a,d,b,c){return this.Di.getDocumentsMatchingQuery(a,b,c).next(a=>(d.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class eD{constructor(a,b,c,d){this.persistence=a,this.Fi=b,this.wt=d,this.$i=new j(u),this.Bi=new cr(a=>bn(a),bo),this.Li=new Map,this.Ui=a.getRemoteDocumentCache(),this.Vs=a.getTargetCache(),this.Ds=a.getBundleCache(),this.qi(c)}qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new el(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.$i))}}function eE(a,b,c,d){return new eD(a,b,c,d)}async function eF(a,d){var b;let c=b=a;return await c.persistence.runTransaction("Handle user change","readonly",a=>{let b;return c.mutationQueue.getAllMutationBatches(a).next(e=>(b=e,c.qi(d),c.mutationQueue.getAllMutationBatches(a))).next(g=>{let h=[],i=[],d=cB();for(let e of b)for(let j of(h.push(e.batchId),e.mutations))d=d.add(j.key);for(let f of g)for(let k of(i.push(f.batchId),f.mutations))d=d.add(k.key);return c.localDocuments.getDocuments(a,d).next(a=>({Ki:a,removedBatchIds:h,addedBatchIds:i}))})})}function eG(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Vs.getLastRemoteSnapshotVersion(a))}function eH(a,b,c){let d=cB(),e=cB();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(d=>{let a=cs;return c.forEach((f,c)=>{let g=d.get(f);c.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(f)),c.isNoDocument()&&c.version.isEqual(ah.min())?(b.removeEntry(f,c.readTime),a=a.insert(f,c)):!g.isValidDocument()||c.version.compareTo(g.version)>0||0===c.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(c),a=a.insert(f,c)):Q("LocalStore","Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",c.version)}),{Gi:a,Qi:e}})}function eI(a,d){var b;let c=b=a;return c.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===d&&(d=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(a,d)))}function eJ(a,d){var b;let c=b=a;return c.persistence.runTransaction("Allocate target","readwrite",a=>{let b;return c.Vs.getTargetData(a,d).next(e=>e?(b=e,av.resolve(b)):c.Vs.allocateTargetId(a).next(e=>(b=new ds(d,e,0,a.currentSequenceNumber),c.Vs.addTargetData(a,b).next(()=>b))))}).then(a=>{let b=c.$i.get(a.targetId);return(null===b||a.snapshotVersion.compareTo(b.snapshotVersion)>0)&&(c.$i=c.$i.insert(a.targetId,a),c.Bi.set(d,a.targetId)),a})}async function eK(e,b,d){var f;let a=f=e,g=a.$i.get(b);try{d||await a.persistence.runTransaction("Release target",d?"readwrite":"readwrite-primary",b=>a.persistence.referenceDelegate.removeTarget(b,g))}catch(c){if(!aA(c))throw c;Q("LocalStore",`Failed to update sequence numbers for target ${b}: ${c}`)}a.$i=a.$i.remove(b),a.Bi.delete(g.target)}function eL(a,d,e){var b;let c=b=a,f=ah.min(),g=cB();return c.persistence.runTransaction("Execute query","readonly",a=>(function(d,e,b){var f;let a=f=d,c=a.Bi.get(b);return void 0!==c?av.resolve(a.$i.get(c)):a.Vs.getTargetData(e,b)})(c,a,bN(d)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,c.Vs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>c.Fi.getDocumentsMatchingQuery(a,d,e?f:ah.min(),e?g:cB())).next(a=>(eO(c,bT(d),a),{documents:a,ji:g})))}function eM(c,d){var e,f;let a=e=c,g=f=a.Vs,b=a.$i.get(d);return b?Promise.resolve(b.target):a.persistence.runTransaction("Get target data","readonly",a=>g.te(a,d).next(a=>a?a.target:null))}function eN(b,c){var d;let a=d=b,e=a.Li.get(c)||ah.min();return a.persistence.runTransaction("Get new document changes","readonly",b=>a.Ui.getAllFromCollectionGroup(b,c,ap(e,-1),Number.MAX_SAFE_INTEGER)).then(b=>(eO(a,c,b),b))}function eO(a,b,c){let d=ah.min();c.forEach((b,a)=>{a.readTime.compareTo(d)>0&&(d=a.readTime)}),a.Li.set(b,d)}async function eP(i,b,j,k){var l,d;let c=l=i,e=cB(),f=cs;for(let a of j){let g=b.Wi(a.metadata.name);a.document&&(e=e.add(g));let h=b.zi(a);h.setReadTime(b.Hi(a.metadata.readTime)),f=f.insert(g,h)}let m=c.Ui.newChangeBuffer({trackRemovals:!0}),n=await eJ(c,(d=k,bN(bI(ai.fromString(`__bundle__/docs/${d}`)))));return c.persistence.runTransaction("Apply bundle documents","readwrite",a=>eH(a,m,f).next(b=>(m.apply(a),b)).next(b=>c.Vs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>c.Vs.addMatchingKeys(a,e,n.targetId)).next(()=>c.localDocuments.getLocalViewOfDocuments(a,b.Gi,b.Qi)).next(()=>b.Gi)))}async function eQ(a,b,e=cB()){var c;let f=await eJ(a,bN(dB(b.bundledQuery))),d=c=a;return d.persistence.runTransaction("Save named query","readwrite",c=>{let g=cR(b.readTime);if(f.snapshotVersion.compareTo(g)>=0)return d.Ds.saveNamedQuery(c,b);let a=f.withResumeToken(n.EMPTY_BYTE_STRING,g);return d.$i=d.$i.insert(a.targetId,a),d.Vs.updateTargetData(c,a).next(()=>d.Vs.removeMatchingKeysForTargetId(c,f.targetId)).next(()=>d.Vs.addMatchingKeys(c,e,f.targetId)).next(()=>d.Ds.saveNamedQuery(c,b))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */ function eR(a,b){return`firestore_clients_${a}_${b}`}function eS(c,a,d){let b=`firestore_mutations_${c}_${d}`;return a.isAuthenticated()&&(b+=`_${a.uid}`),b}function eT(a,b){return`firestore_targets_${a}_${b}`}class eU{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Ji(f,c,d){let a=JSON.parse(d),e,b="object"==typeof a&& -1!==["pending","acknowledged","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return b&&a.error&&(b="string"==typeof a.error.message&&"string"==typeof a.error.code)&&(e=new W(a.error.code,a.error.message)),b?new eU(f,c,a.state,e):(R("SharedClientState",`Failed to parse mutation state for ID '${c}': ${d}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eV{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Ji(c,d){let a=JSON.parse(d),e,b="object"==typeof a&& -1!==["not-current","current","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return b&&a.error&&(b="string"==typeof a.error.message&&"string"==typeof a.error.code)&&(e=new W(a.error.code,a.error.message)),b?new eV(c,a.state,e):(R("SharedClientState",`Failed to parse target state for ID '${c}': ${d}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class eW{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Ji(e,f){let a=JSON.parse(f),c="object"==typeof a&&a.activeTargetIds instanceof Array,d=cC;for(let b=0;c&&b<a.activeTargetIds.length;++b)c=aY(a.activeTargetIds[b]),d=d.add(a.activeTargetIds[b]);return c?new eW(e,d):(R("SharedClientState",`Failed to parse client data for instance '${e}': ${f}`),null)}}class eX{constructor(a,b){this.clientId=a,this.onlineState=b}static Ji(b){let a=JSON.parse(b);return"object"==typeof a&& -1!==["Unknown","Online","Offline"].indexOf(a.onlineState)&&"string"==typeof a.clientId?new eX(a.clientId,a.onlineState):(R("SharedClientState",`Failed to parse online state: ${b}`),null)}}class eY{constructor(){this.activeTargetIds=cC}Xi(a){this.activeTargetIds=this.activeTargetIds.add(a)}Zi(a){this.activeTargetIds=this.activeTargetIds.delete(a)}Yi(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class eZ{constructor(c,d,b,e,f){var g,h,i;this.window=c,this.js=d,this.persistenceKey=b,this.tr=e,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new j(u),this.started=!1,this.ir=[];let a=b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=f,this.rr=eR(this.persistenceKey,this.tr),this.ur=`firestore_sequence_number_${g=this.persistenceKey}`,this.sr=this.sr.insert(this.tr,new eY),this.cr=RegExp(`^firestore_clients_${a}_([^_]*)$`),this.ar=RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.hr=RegExp(`^firestore_targets_${a}_(\\d+)$`),this.lr=`firestore_online_state_${h=this.persistenceKey}`,this.dr=`firestore_bundle_loaded_v2_${i=this.persistenceKey}`,this.window.addEventListener("storage",this.er)}static V(a){return!(!a||!a.localStorage)}async start(){let f=await this.syncEngine.Ri();for(let a of f){if(a===this.tr)continue;let c=this.getItem(eR(this.persistenceKey,a));if(c){let b=eW.Ji(a,c);b&&(this.sr=this.sr.insert(b.clientId,b))}}this._r();let d=this.storage.getItem(this.lr);if(d){let e=this.wr(d);e&&this.mr(e)}for(let g of this.ir)this.nr(g);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.ur,JSON.stringify(a))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(b){let a=!1;return this.sr.forEach((d,c)=>{c.activeTargetIds.has(b)&&(a=!0)}),a}addPendingMutation(a){this.yr(a,"pending")}updateMutationState(a,b,c){this.yr(a,b,c),this.pr(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(eT(this.persistenceKey,a));if(c){let d=eV.Ji(a,c);d&&(b=d.state)}}return this.Ir.Xi(a),this._r(),b}removeLocalQueryTarget(a){this.Ir.Zi(a),this._r()}isLocalQueryTarget(a){return this.Ir.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(eT(this.persistenceKey,a))}updateQueryState(a,b,c){this.Tr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.pr(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Er(a)}notifyBundleLoaded(a){this.Ar(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return Q("SharedClientState","READ",a,b),b}setItem(a,b){Q("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){Q("SharedClientState","REMOVE",a),this.storage.removeItem(a)}nr(b){let a=b;if(a.storageArea===this.storage){if(Q("SharedClientState","EVENT",a.key,a.newValue),a.key===this.rr)return void R("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(null!==a.key){if(this.cr.test(a.key)){if(null==a.newValue){let g=this.Rr(a.key);return this.br(g,null)}{let b=this.Pr(a.key,a.newValue);if(b)return this.br(b.clientId,b)}}else if(this.ar.test(a.key)){if(null!==a.newValue){let c=this.vr(a.key,a.newValue);if(c)return this.Vr(c)}}else if(this.hr.test(a.key)){if(null!==a.newValue){let d=this.Sr(a.key,a.newValue);if(d)return this.Dr(d)}}else if(a.key===this.lr){if(null!==a.newValue){let e=this.wr(a.newValue);if(e)return this.mr(e)}}else if(a.key===this.ur){let f=function(a){let b=x.ot;if(null!=a)try{var e;let c=JSON.parse(a);"number"==typeof c||U(),b=c}catch(d){R("SharedClientState","Failed to read sequence number from WebStorage",d)}return b}(a.newValue);f!==x.ot&&this.sequenceNumberHandler(f)}else if(a.key===this.dr){let h=this.Cr(a.newValue);await Promise.all(h.map(a=>this.syncEngine.Nr(a)))}}}else this.ir.push(a)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(a,b,c){let d=new eU(this.currentUser,a,b,c),e=eS(this.persistenceKey,this.currentUser,a);this.setItem(e,d.Yi())}pr(a){let b=eS(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Er(a){let b={clientId:this.tr,onlineState:a};this.storage.setItem(this.lr,JSON.stringify(b))}Tr(a,b,c){let d=eT(this.persistenceKey,a),e=new eV(a,b,c);this.setItem(d,e.Yi())}Ar(a){let b=JSON.stringify(Array.from(a));this.setItem(this.dr,b)}Rr(b){let a=this.cr.exec(b);return a?a[1]:null}Pr(a,b){let c=this.Rr(a);return eW.Ji(c,b)}vr(c,d){let a=this.ar.exec(c),e=Number(a[1]),f=void 0!==a[2]?a[2]:null;return eU.Ji(new b(f),e,d)}Sr(a,b){let c=this.hr.exec(a),d=Number(c[1]);return eV.Ji(d,b)}wr(a){return eX.Ji(a)}Cr(a){return JSON.parse(a)}async Vr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.kr(a.batchId,a.state,a.error);Q("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}Dr(a){return this.syncEngine.Or(a.targetId,a.state,a.error)}br(a,b){let c=b?this.sr.insert(a,b):this.sr.remove(a),d=this.gr(this.sr),e=this.gr(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Mr(f,g).then(()=>{this.sr=c})}mr(a){this.sr.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}gr(a){let b=cC;return a.forEach((c,a)=>{b=b.unionWith(a.activeTargetIds)}),b}}class e${constructor(){this.Fr=new eY,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Fr.Xi(a),this.$r[a]||"not-current"}updateQueryState(a,b,c){this.$r[a]=b}removeLocalQueryTarget(a){this.Fr.Zi(a)}isLocalQueryTarget(a){return this.Fr.activeTargetIds.has(a)}clearQueryState(a){delete this.$r[a]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(a){return this.Fr.activeTargetIds.has(a)}start(){return this.Fr=new eY,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e_{Br(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class e0{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(a){this.Gr.push(a)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){for(let a of(Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Gr))a(0)}Kr(){for(let a of(Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Gr))a(1)}static V(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let e1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class e2{constructor(a){this.jr=a.jr,this.Wr=a.Wr}zr(a){this.Hr=a}Jr(a){this.Yr=a}onMessage(a){this.Xr=a}close(){this.Wr()}send(a){this.jr(a)}Zr(){this.Hr()}eo(a){this.Yr(a)}no(a){this.Xr(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e3 extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.so=b+"://"+a.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(a,e,b,f,g){let c=this.oo(a,e);Q("RestConnection","Sending: ",c,b);let d={};return this.uo(d,f,g),this.co(a,c,d,b).then(a=>(Q("RestConnection","Received: ",a),a),d=>{throw S("RestConnection",`${a} failed with error: `,d,"url: ",c,"request:",b),d})}ao(a,b,c,d,e,f){return this.ro(a,b,c,d,e)}uo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+N,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}oo(a,b){let c=e1[a];return`${this.so}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}co(a,b,c,d){return new Promise((g,h)=>{let e=new K.JJ;e.listenOnce(K.tw.COMPLETE,()=>{try{switch(e.getLastErrorCode()){case K.jK.NO_ERROR:let c=e.getResponseJson();Q("Connection","XHR received:",JSON.stringify(c)),g(c);break;case K.jK.TIMEOUT:Q("Connection",'RPC "'+a+'" timed out'),h(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case K.jK.HTTP_ERROR:let d=e.getStatus();if(Q("Connection",'RPC "'+a+'" failed with status:',d,"response text:",e.getResponseText()),d>0){let b=e.getResponseJson().error;if(b&&b.status&&b.message){let f=function(b){let a=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(a)>=0?a:V.UNKNOWN}(b.status);h(new W(f,b.message))}else h(new W(V.UNKNOWN,"Server responded with status "+e.getStatus()))}else h(new W(V.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{Q("Connection",'RPC "'+a+'" completed.')}});let f=JSON.stringify(d);e.send(b,"POST",f,c,15)})}ho(e,f,g){let h=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,K.UE)(),j=(0,K.FJ)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new K.zI({})),this.uo(a.initMessageHeaders,f,g),(0,t.uI)()||(0,t.b$)()||(0,t.d)()||(0,t.w1)()||(0,t.Mn)()||(0,t.ru)()||(a.httpHeadersOverwriteParam="$httpHeaders");let d=h.join("");Q("Connection","Creating WebChannel: "+d,a);let c=i.createWebChannel(d,a),m=!1,n=!1,l=new e2({jr(a){n?Q("Connection","Not sending because WebChannel is closed:",a):(m||(Q("Connection","Opening WebChannel transport."),c.open(),m=!0),Q("Connection","WebChannel sending:",a),c.send(a))},Wr:()=>c.close()}),b=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return b(c,K.ii.EventType.OPEN,()=>{n||Q("Connection","WebChannel transport opened.")}),b(c,K.ii.EventType.CLOSE,()=>{n||(n=!0,Q("Connection","WebChannel transport closed"),l.eo())}),b(c,K.ii.EventType.ERROR,a=>{n||(n=!0,S("Connection","WebChannel transport errored:",a),l.eo(new W(V.UNAVAILABLE,"The operation could not be completed")))}),b(c,K.ii.EventType.MESSAGE,i=>{var d,j;if(!n){let b=i.data[0];(j=!!b)||U();let f=b,a=f.error||(null===(d=f[0])|| void 0===d?void 0:d.error);if(a){Q("Connection","WebChannel received error:",a);let g=a.status,e=function(b){let a=k[b];if(void 0!==a)return cq(a)}(g),h=a.message;void 0===e&&(e=V.INTERNAL,h="Unknown error status: "+g+" with message "+a.message),n=!0,l.eo(new W(e,h)),c.close()}else Q("Connection","WebChannel received:",b),l.no(b)}}),b(j,K.ju.STAT_EVENT,a=>{a.stat===K.kN.PROXY?Q("Connection","Detected buffering proxy"):a.stat===K.kN.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{l.Zr()},0),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function e4(){return"undefined"!=typeof window?window:null}function e5(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e6(a){return new cO(a,!0)}class e7{constructor(a,b,c=1e3,d=1.5,e=6e4){this.js=a,this.timerId=b,this.lo=c,this.fo=d,this._o=e,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(d){this.cancel();let b=Math.floor(this.wo+this.To()),c=Math.max(0,Date.now()-this.yo),a=Math.max(0,b-c);a>0&&Q("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.wo} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,a,()=>(this.yo=Date.now(),d())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class p{constructor(a,b,c,d,e,f,g,h){this.js=a,this.Ao=c,this.Ro=d,this.bo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new e7(a,b)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(a){this.Fo(),this.stream.send(a)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(b,a){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==b?this.So.reset():a&&a.code===V.RESOURCE_EXHAUSTED?(R(a.toString()),R("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):a&&a.code===V.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=b,await this.listener.Jr(a)}Bo(){}auth(){this.state=1;let a=this.Lo(this.Po),b=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.Po===b&&this.Uo(a,c)},b=>{a(()=>{let a=new W(V.UNKNOWN,"Fetching auth token failed: "+b.message);return this.qo(a)})})}Uo(a,b){let c=this.Lo(this.Po);this.stream=this.Ko(a,b),this.stream.zr(()=>{c(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(a=>{c(()=>this.qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(a){return Q("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Lo(a){return b=>{this.js.enqueueAndForget(()=>this.Po===a?b():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class e8 extends p{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.wt=e}Ko(a,b){return this.bo.ho("Listen",a,b)}onMessage(a){this.So.reset();let b=function(g,a){let d;if("targetChange"in a){var e,j,c,F,G;a.targetChange;let o="NO_CHANGE"===(e=a.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:U(),p=a.targetChange.targetIds||[],q=(j=g,c=a.targetChange.resumeToken,j.dt?(void 0===c||"string"==typeof c||U(),n.fromBase64String(c||"")):(void 0===c||c instanceof Uint8Array||U(),n.fromUint8Array(c||new Uint8Array))),k=a.targetChange.cause,r=k&&function(a){let b=void 0===a.code?V.UNKNOWN:cq(a.code);return new W(b,a.message||"")}(k);d=new cH(o,p,q,r||null)}else if("documentChange"in a){a.documentChange;let b=a.documentChange;b.document,b.document.name,b.document.updateTime;let s=cV(g,b.document.name),t=cR(b.document.updateTime),u=new bi({mapValue:{fields:b.document.fields}}),l=bk.newFoundDocument(s,t,u),v=b.targetIds||[],w=b.removedTargetIds||[];d=new cF(v,w,l.key,l)}else if("documentDelete"in a){a.documentDelete;let f=a.documentDelete;f.document;let x=cV(g,f.document),y=f.readTime?cR(f.readTime):ah.min(),m=bk.newNoDocument(x,y),z=f.removedTargetIds||[];d=new cF([],z,m.key,m)}else if("documentRemove"in a){a.documentRemove;let h=a.documentRemove;h.document;let A=cV(g,h.document),B=h.removedTargetIds||[];d=new cF([],B,A,null)}else{if(!("filter"in a))return U();{a.filter;let i=a.filter;i.targetId;let C=i.count||0,D=new co(C),E=i.targetId;d=new cG(E,D)}}return d}(this.wt,a),c=function(b){if(!("targetChange"in b))return ah.min();let a=b.targetChange;return a.targetIds&&a.targetIds.length?ah.min():a.readTime?cR(a.readTime):ah.min()}(a);return this.listener.Go(b,c)}Qo(b){let a={};a.database=cY(this.wt),a.addTarget=function(b,a){let c,d=a.target;return(c=bp(d)?{documents:c2(b,d)}:{query:c3(b,d)}).targetId=a.targetId,a.resumeToken.approximateByteSize()>0?c.resumeToken=cQ(b,a.resumeToken):a.snapshotVersion.compareTo(ah.min())>0&&(c.readTime=cP(b,a.snapshotVersion.toTimestamp())),c}(this.wt,b);let c=function(c,b){let a=function(b,a){switch(a){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,b.purpose);return null==a?null:{"goog-listen-tags":a}}(this.wt,b);c&&(a.labels=c),this.Mo(a)}jo(b){let a={};a.database=cY(this.wt),a.removeTarget=b,this.Mo(a)}}class e9 extends p{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.wt=e,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(a,b){return this.bo.ho("Write",a,b)}onMessage(a){var f,b,c,g,h;if(!a.streamToken&&U(),this.lastStreamToken=a.streamToken,this.Wo){this.So.reset();let d=(b=a.writeResults,c=a.commitTime,b&&b.length>0?(void 0!==c||U(),b.map(e=>{var a,b;let d;return a=e,b=c,(d=a.updateTime?cR(a.updateTime):cR(b)).isEqual(ah.min())&&(d=cR(b)),new b9(d,a.transformResults||[])})):[]),e=cR(a.commitTime);return this.listener.Jo(e,d)}return a.writeResults&&0!==a.writeResults.length&&U(),this.Wo=!0,this.listener.Yo()}Xo(){let a={};a.database=cY(this.wt),this.Mo(a)}Ho(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>c0(this.wt,a))};this.Mo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class fa extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.bo=c,this.wt=d,this.Zo=!1}tu(){if(this.Zo)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}ro(a,b,c){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.bo.ro(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(V.UNKNOWN,a.toString())})}ao(a,b,c,d){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.bo.ao(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(V.UNKNOWN,a.toString())})}terminate(){this.Zo=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fb{constructor(b,c,a,d,e){this.localStore=b,this.datastore=c,this.asyncQueue=a,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=e,this.du.Br(b=>{a.enqueueAndForget(async()=>{fk(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(b){var c;let a=c=b;a.lu.add(4),await fd(a),a._u.set("Unknown"),a.lu.delete(4),await fc(a)}(this))})}),this._u=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(a){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.ru("Offline")))}set(a){this.cu(),this.eu=0,"Online"===a&&(this.su=!1),this.ru(a)}ru(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}ou(b){let a=`Could not reach Cloud Firestore backend. ${b}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(R(a),this.su=!1):Q("OnlineStateTracker",a)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}(a,d)}}async function fc(a){if(fk(a))for(let b of a.fu)await b(!0)}async function fd(a){for(let b of a.fu)await b(!1)}function fe(c,b){var d;let a=d=c;a.hu.has(b.targetId)||(a.hu.set(b.targetId,b),fj(a)?fi(a):fC(a).Co()&&fg(a,b))}function ff(d,c){var e;let a=e=d,b=fC(a);a.hu.delete(c),b.Co()&&fh(a,c),0===a.hu.size&&(b.Co()?b.ko():fk(a)&&a._u.set("Unknown"))}function fg(a,b){a.wu.Nt(b.targetId),fC(a).Qo(b)}function fh(a,b){a.wu.Nt(b),fC(a).jo(b)}function fi(a){a.wu=new cJ({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),te:b=>a.hu.get(b)||null}),fC(a).start(),a._u.iu()}function fj(a){return fk(a)&&!fC(a).Do()&&a.hu.size>0}function fk(a){var b;return 0===(b=a).lu.size}function fl(a){a.wu=void 0}async function fm(a){a.hu.forEach((b,c)=>{fg(a,b)})}async function fn(a,b){fl(a),fj(a)?(a._u.uu(b),fi(a)):a._u.set("Unknown")}async function fo(b,a,c){if(b._u.set("Online"),a instanceof cH&&2===a.state&&a.cause)try{await async function(a,c){let d=c.cause;for(let b of c.targetIds)a.hu.has(b)&&(await a.remoteSyncer.rejectListen(b,d),a.hu.delete(b),a.wu.removeTarget(b))}(b,a)}catch(d){Q("RemoteStore","Failed to remove targets %s: %s ",a.targetIds.join(","),d),await fp(b,d)}else if(a instanceof cF?b.wu.Ut(a):a instanceof cG?b.wu.zt(a):b.wu.Gt(a),!c.isEqual(ah.min()))try{let f=await eG(b.localStore);c.compareTo(f)>=0&&await function(b,c){let a=b.wu.Yt(c);return a.targetChanges.forEach((a,d)=>{if(a.resumeToken.approximateByteSize()>0){let e=b.hu.get(d);e&&b.hu.set(d,e.withResumeToken(a.resumeToken,c))}}),a.targetMismatches.forEach(c=>{let a=b.hu.get(c);if(!a)return;b.hu.set(c,a.withResumeToken(n.EMPTY_BYTE_STRING,a.snapshotVersion)),fh(b,c);let d=new ds(a.target,c,1,a.sequenceNumber);fg(b,d)}),b.remoteSyncer.applyRemoteEvent(a)}(b,c)}catch(e){Q("RemoteStore","Failed to raise snapshot:",e),await fp(b,e)}}async function fp(a,b,c){if(!aA(b))throw b;a.lu.add(1),await fd(a),a._u.set("Offline"),c||(c=()=>eG(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await c(),a.lu.delete(1),await fc(a)})}function fq(b,a){return a().catch(c=>fp(b,c,a))}async function fr(d){var e;let a=e=d,f=fD(a),c=a.au.length>0?a.au[a.au.length-1].batchId:-1;for(;fs(a);)try{let b=await eI(a.localStore,c);if(null===b){0===a.au.length&&f.ko();break}c=b.batchId,ft(a,b)}catch(g){await fp(a,g)}fu(a)&&fv(a)}function fs(a){return fk(a)&&a.au.length<10}function ft(b,c){b.au.push(c);let a=fD(b);a.Co()&&a.zo&&a.Ho(c.mutations)}function fu(a){return fk(a)&&!fD(a).Do()&&a.au.length>0}function fv(a){fD(a).start()}async function fw(a){fD(a).Xo()}async function fx(a){let b=fD(a);for(let c of a.au)b.Ho(c.mutations)}async function fy(a,b,c){let d=a.au.shift(),e=dq.from(d,b,c);await fq(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await fr(a)}async function fz(a,b){b&&fD(a).zo&&await async function(a,c){var b;if(cp(b=c.code)&&b!==V.ABORTED){let d=a.au.shift();fD(a).No(),await fq(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,c)),await fr(a)}}(a,b),fu(a)&&fv(a)}async function fA(b,c){var d;let a=d=b;a.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");let e=fk(a);a.lu.add(3),await fd(a),e&&a._u.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a.lu.delete(3),await fc(a)}async function fB(c,b){var d;let a=d=c;b?(a.lu.delete(2),await fc(a)):b||(a.lu.add(2),await fd(a),a._u.set("Unknown"))}function fC(a){return a.mu||(a.mu=function(b,c,d){var e;let a=e=b;return a.tu(),new e8(c,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,d)}(a.datastore,a.asyncQueue,{zr:fm.bind(null,a),Jr:fn.bind(null,a),Go:fo.bind(null,a)}),a.fu.push(async b=>{b?(a.mu.No(),fj(a)?fi(a):a._u.set("Unknown")):(await a.mu.stop(),fl(a))})),a.mu}function fD(a){return a.gu||(a.gu=function(b,c,d){var e;let a=e=b;return a.tu(),new e9(c,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,d)}(a.datastore,a.asyncQueue,{zr:fw.bind(null,a),Jr:fz.bind(null,a),Yo:fx.bind(null,a),Jo:fy.bind(null,a)}),a.fu.push(async b=>{b?(a.gu.No(),await fr(a)):(await a.gu.stop(),a.au.length>0&&(Q("RemoteStore",`Stopping write stream with ${a.au.length} pending writes`),a.au=[]))})),a.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class fE{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new X,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(c,d,a,e,f){let g=Date.now()+a,b=new fE(c,d,g,e,f);return b.start(a),b}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fF(a,b){if(R("AsyncQueue",`${b}: ${a}`),aA(a))return new W(V.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class fG{constructor(a){this.comparator=a?(b,c)=>a(b,c)||f.comparator(b.key,c.key):(a,b)=>f.comparator(a.key,b.key),this.keyedMap=cu(),this.sortedSet=new j(this.comparator)}static emptySet(a){return new fG(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(b){let a=this.keyedMap.get(b);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof fG)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(b,c){let a=new fG;return a.comparator=this.comparator,a.keyedMap=b,a.sortedSet=c,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class fH{constructor(){this.yu=new j(f.comparator)}track(a){let c=a.doc.key,b=this.yu.get(c);b?0!==a.type&&3===b.type?this.yu=this.yu.insert(c,a):3===a.type&&1!==b.type?this.yu=this.yu.insert(c,{type:b.type,doc:a.doc}):2===a.type&&2===b.type?this.yu=this.yu.insert(c,{type:2,doc:a.doc}):2===a.type&&0===b.type?this.yu=this.yu.insert(c,{type:0,doc:a.doc}):1===a.type&&0===b.type?this.yu=this.yu.remove(c):1===a.type&&2===b.type?this.yu=this.yu.insert(c,{type:1,doc:b.doc}):0===a.type&&1===b.type?this.yu=this.yu.insert(c,{type:2,doc:a.doc}):U():this.yu=this.yu.insert(c,a)}pu(){let a=[];return this.yu.inorderTraversal((c,b)=>{a.push(b)}),a}}class fI{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(b,a,c,d){let e=[];return a.forEach(a=>{e.push({type:0,doc:a})}),new fI(b,a,fG.emptySet(a),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&bP(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let c=this.docChanges,d=a.docChanges;if(c.length!==d.length)return!1;for(let b=0;b<c.length;b++)if(c[b].type!==d[b].type||!c[b].doc.isEqual(d[b].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class fJ{constructor(){this.Iu=void 0,this.listeners=[]}}class fK{constructor(){this.queries=new cr(a=>bQ(a),bP),this.onlineState="Unknown",this.Tu=new Set}}async function fL(f,b){var g;let c=g=f,d=b.query,e=!1,a=c.queries.get(d);if(a||(e=!0,a=new fJ),e)try{a.Iu=await c.onListen(d)}catch(h){let i=fF(h,`Initialization of query '${bR(b.query)}' failed`);return void b.onError(i)}c.queries.set(d,a),a.listeners.push(b),b.Eu(c.onlineState),a.Iu&&b.Au(a.Iu)&&fP(c)}async function fM(g,d){var h;let b=h=g,c=d.query,e=!1,a=b.queries.get(c);if(a){let f=a.listeners.indexOf(d);f>=0&&(a.listeners.splice(f,1),e=0===a.listeners.length)}if(e)return b.queries.delete(c),b.onUnlisten(c)}function fN(e,f){var g;let c=g=e,d=!1;for(let a of f){let h=a.query,b=c.queries.get(h);if(b){for(let i of b.listeners)i.Au(a)&&(d=!0);b.Iu=a}}d&&fP(c)}function fO(d,a,e){var f;let b=f=d,c=b.queries.get(a);if(c)for(let g of c.listeners)g.onError(e);b.queries.delete(a)}function fP(a){a.Tu.forEach(a=>{a.next()})}class fQ{constructor(a,b,c){this.query=a,this.Ru=b,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=c||{}}Au(a){if(!this.options.includeMetadataChanges){let c=[];for(let d of a.docChanges)3!==d.type&&c.push(d);a=new fI(a.query,a.docs,a.oldDocs,c,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let b=!1;return this.bu?this.vu(a)&&(this.Ru.next(a),b=!0):this.Vu(a,this.onlineState)&&(this.Su(a),b=!0),this.Pu=a,b}onError(a){this.Ru.error(a)}Eu(a){this.onlineState=a;let b=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,a)&&(this.Su(this.Pu),b=!0),b}Vu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Du||!c)&&(!a.docs.isEmpty()||"Offline"===b)}vu(a){if(a.docChanges.length>0)return!0;let b=this.Pu&&this.Pu.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}Su(a){a=fI.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.bu=!0,this.Ru.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class fR{constructor(a,b){this.payload=a,this.byteLength=b}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class fS{constructor(a){this.wt=a}Wi(a){return cV(this.wt,a)}zi(a){return a.metadata.exists?c_(this.wt,a.document,!1):bk.newNoDocument(this.Wi(a.metadata.name),this.Hi(a.metadata.readTime))}Hi(a){return cR(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fT{constructor(a){this.key=a}}class fU{constructor(a){this.key=a}}class fV{constructor(a,b){this.query=a,this.Fu=b,this.$u=null,this.current=!1,this.Bu=cB(),this.mutatedKeys=cB(),this.Lu=bU(a),this.Uu=new fG(this.Lu)}get qu(){return this.Fu}Ku(g,a){let f=a?a.Gu:new fH,c=a?a.Uu:this.Uu,d=a?a.mutatedKeys:this.mutatedKeys,b=c,h=!1,i="F"===this.query.limitType&&c.size===this.query.limit?c.last():null,j="L"===this.query.limitType&&c.size===this.query.limit?c.first():null;if(g.inorderTraversal((g,l)=>{let e=c.get(g),a=bS(this.query,l)?l:null,n=!!e&&this.mutatedKeys.has(e.key),m=!!a&&(a.hasLocalMutations||this.mutatedKeys.has(a.key)&&a.hasCommittedMutations),k=!1;e&&a?e.data.isEqual(a.data)?n!==m&&(f.track({type:3,doc:a}),k=!0):this.Qu(e,a)||(f.track({type:2,doc:a}),k=!0,(i&&this.Lu(a,i)>0||j&&0>this.Lu(a,j))&&(h=!0)):!e&&a?(f.track({type:0,doc:a}),k=!0):e&&!a&&(f.track({type:1,doc:e}),k=!0,(i||j)&&(h=!0)),k&&(a?(b=b.add(a),d=m?d.add(g):d.delete(g)):(b=b.delete(g),d=d.delete(g)))}),null!==this.query.limit)for(;b.size>this.query.limit;){let e="F"===this.query.limitType?b.last():b.first();b=b.delete(e.key),d=d.delete(e.key),f.track({type:1,doc:e})}return{Uu:b,Gu:f,Oi:h,mutatedKeys:d}}Qu(b,a){return b.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(a,f,g){let h=this.Uu;this.Uu=a.Uu,this.mutatedKeys=a.mutatedKeys;let b=a.Gu.pu();b.sort((a,b)=>(function(b,c){let a=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return a(b)-a(c)})(a.type,b.type)||this.Lu(a.doc,b.doc)),this.ju(g);let d=f?this.Wu():[],c=0===this.Bu.size&&this.current?1:0,e=c!==this.$u;return(this.$u=c,0!==b.length||e)?{snapshot:new fI(this.query,a.Uu,h,b,a.mutatedKeys,0===c,e,!1),zu:d}:{zu:d}}Eu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new fH,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(a){return!this.Fu.has(a)&&!!this.Uu.has(a)&&!this.Uu.get(a).hasLocalMutations}ju(a){a&&(a.addedDocuments.forEach(a=>this.Fu=this.Fu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Fu=this.Fu.delete(a)),this.current=a.current)}Wu(){if(!this.current)return[];let a=this.Bu;this.Bu=cB(),this.Uu.forEach(a=>{this.Hu(a.key)&&(this.Bu=this.Bu.add(a.key))});let b=[];return a.forEach(a=>{this.Bu.has(a)||b.push(new fU(a))}),this.Bu.forEach(c=>{a.has(c)||b.push(new fT(c))}),b}Ju(a){this.Fu=a.ji,this.Bu=cB();let b=this.Ku(a.documents);return this.applyChanges(b,!0)}Yu(){return fI.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class fW{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class fX{constructor(a){this.key=a,this.Xu=!1}}class fY{constructor(a,b,c,d,e,g){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=g,this.Zu={},this.tc=new cr(a=>bQ(a),bP),this.ec=new Map,this.nc=new Set,this.sc=new j(f.comparator),this.ic=new Map,this.rc=new en,this.oc={},this.uc=new Map,this.cc=d4.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function fZ(g,b){let a=gp(g),c,d,e=a.tc.get(b);if(e)c=e.targetId,a.sharedClientState.addLocalQueryTarget(c),d=e.view.Yu();else{let f=await eJ(a.localStore,bN(b));a.isPrimaryClient&&fe(a.remoteStore,f);let h=a.sharedClientState.addLocalQueryTarget(f.targetId);d=await f$(a,b,c=f.targetId,"current"===h)}return d}async function f$(a,b,c,g){a.hc=(b,c,d)=>(async function(b,a,f,d){let c=a.view.Ku(f);c.Oi&&(c=await eL(b.localStore,a.query,!1).then(({documents:b})=>a.view.Ku(b,c)));let g=d&&d.targetChanges.get(a.targetId),e=a.view.applyChanges(c,b.isPrimaryClient,g);return ga(b,a.targetId,e.zu),e.snapshot})(a,b,c,d);let e=await eL(a.localStore,b,!0),d=new fV(b,e.ji),h=d.Ku(e.documents),i=cE.createSynthesizedTargetChangeForCurrentChange(c,g&&"Offline"!==a.onlineState),f=d.applyChanges(h,a.isPrimaryClient,i);ga(a,c,f.zu);let j=new fW(b,c,d);return a.tc.set(b,j),a.ec.has(c)?a.ec.get(c).push(b):a.ec.set(c,[b]),f.snapshot}async function f_(e,c){var f;let a=f=e,b=a.tc.get(c),d=a.ec.get(b.targetId);if(d.length>1)return a.ec.set(b.targetId,d.filter(a=>!bP(a,c))),void a.tc.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(b.targetId),a.sharedClientState.isActiveQueryTarget(b.targetId)||await eK(a.localStore,b.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(b.targetId),ff(a.remoteStore,b.targetId),f8(a,b.targetId)}).catch(au)):(f8(a,b.targetId),await eK(a.localStore,b.targetId,!0))}async function f0(h,i,e){let a=gq(h);try{var b,f,g;let d=await function(a,b){var c;let d=c=a,e=ag.now(),f=b.reduce((a,b)=>a.add(b.key),cB()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=cs,i=cB();return d.Ui.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(i=>{g=i;let h=[];for(let c of b){let f=cf(c,g.get(c.key).overlayedDocument);null!=f&&h.push(new ci(c.key,f,bj(f.value.mapValue),ca.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,h,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:cv(g)}))}(a.localStore,i),c;a.sharedClientState.addPendingMutation(d.batchId),b=a,f=d.batchId,g=e,(c=b.oc[b.currentUser.toKey()])||(c=new j(u)),c=c.insert(f,g),b.oc[b.currentUser.toKey()]=c,await gd(a,d.changes),await fr(a.remoteStore)}catch(k){let l=fF(k,"Failed to persist write");e.reject(l)}}async function f1(c,a){var d;let b=d=c;try{let e=await function(b,c){var d;let a=d=b,e=c.snapshotVersion,f=a.$i;return a.persistence.runTransaction("Apply remote event","readwrite-primary",d=>{let g=a.Ui.newChangeBuffer({trackRemovals:!0});f=a.$i;let b=[];c.targetChanges.forEach((h,i)=>{var k,m,j;let l=f.get(i);if(!l)return;b.push(a.Vs.removeMatchingKeys(d,h.removedDocuments,i).next(()=>a.Vs.addMatchingKeys(d,h.addedDocuments,i)));let g=l.withSequenceNumber(d.currentSequenceNumber);c.targetMismatches.has(i)?g=g.withResumeToken(n.EMPTY_BYTE_STRING,ah.min()).withLastLimboFreeSnapshotVersion(ah.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,e)),f=f.insert(i,g),k=l,m=g,j=h,(0===k.resumeToken.approximateByteSize()||m.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8||j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0)&&b.push(a.Vs.updateTargetData(d,g))});let i=cs,j=cB();if(c.documentUpdates.forEach(e=>{c.resolvedLimboDocuments.has(e)&&b.push(a.persistence.referenceDelegate.updateLimboDocument(d,e))}),b.push(eH(d,g,c.documentUpdates).next(a=>{i=a.Gi,j=a.Qi})),!e.isEqual(ah.min())){let h=a.Vs.getLastRemoteSnapshotVersion(d).next(b=>a.Vs.setTargetsMetadata(d,d.currentSequenceNumber,e));b.push(h)}return av.waitFor(b).next(()=>g.apply(d)).next(()=>a.localDocuments.getLocalViewOfDocuments(d,i,j)).next(()=>i)}).then(b=>(a.$i=f,b))}(b.localStore,a);a.targetChanges.forEach((a,d)=>{var f,e,g;let c=b.ic.get(d);c&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||U(),a.addedDocuments.size>0?c.Xu=!0:a.modifiedDocuments.size>0?(e=c.Xu)||U():a.removedDocuments.size>0&&(c.Xu||U(),c.Xu=!1))}),await gd(b,e,a)}catch(f){await au(f)}}function f2(e,b,c){var f;let a=f=e;if(a.isPrimaryClient&&0===c|| !a.isPrimaryClient&&1===c){let d=[];a.tc.forEach((e,c)=>{let a=c.view.Eu(b);a.snapshot&&d.push(a.snapshot)}),function(b,c){var d;let a=d=b;a.onlineState=c;let e=!1;a.queries.forEach((d,a)=>{for(let b of a.listeners)b.Eu(c)&&(e=!0)}),e&&fP(a)}(a.eventManager,b),d.length&&a.Zu.Go(d),a.onlineState=b,a.isPrimaryClient&&a.sharedClientState.setOnlineState(b)}}async function f3(g,c,h){var i;let a=i=g;a.sharedClientState.updateQueryState(c,"rejected",h);let e=a.ic.get(c),b=e&&e.key;if(b){let d=new j(f.comparator);d=d.insert(b,bk.newNoDocument(b,ah.min()));let k=cB().add(b),l=new cD(ah.min(),new Map,new m(u),d,k);await f1(a,l),a.sc=a.sc.remove(b),a.ic.delete(c),gc(a)}else await eK(a.localStore,c,!1).then(()=>f8(a,c,h)).catch(au)}async function f4(d,c){var e;let a=e=d,b=c.batch.batchId;try{let f=await function(a,d){var b;let c=b=a;return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let e=d.batch.keys(),b=c.Ui.newChangeBuffer({trackRemovals:!0});return(function(e,f,a,g){let b=a.batch,c=b.keys(),d=av.resolve();return c.forEach(c=>{d=d.next(()=>g.getEntry(f,c)).next(d=>{var f;let e=a.docVersions.get(c);null!==e||U(),0>d.version.compareTo(e)&&(b.applyToRemoteDocument(d,a),d.isValidDocument()&&(d.setReadTime(a.commitVersion),g.addEntry(d)))})}),d.next(()=>e.mutationQueue.removeMutationBatch(f,b))})(c,a,d,b).next(()=>b.apply(a)).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,e,d.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(b){let c=cB();for(let a=0;a<b.mutationResults.length;++a)b.mutationResults[a].transformResults.length>0&&(c=c.add(b.batch.mutations[a].key));return c}(d))).next(()=>c.localDocuments.getDocuments(a,e))})}(a.localStore,c);f7(a,b,null),f6(a,b),a.sharedClientState.updateMutationState(b,"acknowledged"),await gd(a,f)}catch(g){await au(g)}}async function f5(d,b,c){var e;let a=e=d;try{let f=await function(a,d){var b;let c=b=a;return c.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let b;return c.mutationQueue.lookupMutationBatch(a,d).next(d=>{var e;return null!==d||U(),b=d.keys(),c.mutationQueue.removeMutationBatch(a,d)}).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,b,d)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,b)).next(()=>c.localDocuments.getDocuments(a,b))})}(a.localStore,b);f7(a,b,c),f6(a,b),a.sharedClientState.updateMutationState(b,"rejected",c),await gd(a,f)}catch(g){await au(g)}}function f6(a,b){(a.uc.get(b)||[]).forEach(a=>{a.resolve()}),a.uc.delete(b)}function f7(f,d,e){var g;let b=g=f,a=b.oc[b.currentUser.toKey()];if(a){let c=a.get(d);c&&(e?c.reject(e):c.resolve(),a=a.remove(d)),b.oc[b.currentUser.toKey()]=a}}function f8(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.ec.get(b)))a.tc.delete(d),c&&a.Zu.lc(d,c);a.ec.delete(b),a.isPrimaryClient&&a.rc.us(b).forEach(b=>{a.rc.containsKey(b)||f9(a,b)})}function f9(a,b){a.nc.delete(b.path.canonicalString());let c=a.sc.get(b);null!==c&&(ff(a.remoteStore,c),a.sc=a.sc.remove(b),a.ic.delete(c),gc(a))}function ga(b,c,d){for(let a of d)a instanceof fT?(b.rc.addReference(a.key,c),gb(b,a)):a instanceof fU?(Q("SyncEngine","Document no longer in limbo: "+a.key),b.rc.removeReference(a.key,c),b.rc.containsKey(a.key)||f9(b,a.key)):U()}function gb(a,d){let b=d.key,c=b.path.canonicalString();a.sc.get(b)||a.nc.has(c)||(Q("SyncEngine","New document in limbo: "+b),a.nc.add(c),gc(a))}function gc(a){for(;a.nc.size>0&&a.sc.size<a.maxConcurrentLimboResolutions;){let d=a.nc.values().next().value;a.nc.delete(d);let b=new f(ai.fromString(d)),c=a.cc.next();a.ic.set(c,new fX(b)),a.sc=a.sc.insert(b,c),fe(a.remoteStore,new ds(bN(bI(b.path)),c,2,x.ot))}}async function gd(b,g,h){var c;let a=c=b,d=[],e=[],f=[];a.tc.isEmpty()||(a.tc.forEach((c,b)=>{f.push(a.hc(b,g,h).then(c=>{if(c){a.isPrimaryClient&&a.sharedClientState.updateQueryState(b.targetId,c.fromCache?"not-current":"current"),d.push(c);let f=eB.Vi(b.targetId,c);e.push(f)}}))}),await Promise.all(f),a.Zu.Go(d),await async function(f,g){var h;let a=h=f;try{await a.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>av.forEach(g,c=>av.forEach(c.Pi,d=>a.persistence.referenceDelegate.addReference(b,c.targetId,d)).next(()=>av.forEach(c.vi,d=>a.persistence.referenceDelegate.removeReference(b,c.targetId,d)))))}catch(b){if(!aA(b))throw b;Q("LocalStore","Failed to update sequence numbers: "+b)}for(let c of g){let d=c.targetId;if(!c.fromCache){let e=a.$i.get(d),i=e.snapshotVersion,j=e.withLastLimboFreeSnapshotVersion(i);a.$i=a.$i.insert(d,j)}}}(a.localStore,e))}async function ge(e,b){var f,d,g;let a=f=e;if(!a.currentUser.isEqual(b)){Q("SyncEngine","User change. New user:",b.toKey());let c=await eF(a.localStore,b);a.currentUser=b,g="'waitForPendingWrites' promise is rejected due to a user change.",(d=a).uc.forEach(a=>{a.forEach(a=>{a.reject(new W(V.CANCELLED,g))})}),d.uc.clear(),a.sharedClientState.handleUserChange(b,c.removedBatchIds,c.addedBatchIds),await gd(a,c.Ki)}}function gf(f,d){var g;let b=g=f,c=b.ic.get(d);if(c&&c.Xu)return cB().add(c.key);{let a=cB(),e=b.ec.get(d);if(!e)return a;for(let h of e){let i=b.tc.get(h);a=a.unionWith(i.view.qu)}return a}}async function gg(d,a){var e;let b=e=d,f=await eL(b.localStore,a.query,!0),c=a.view.Ju(f);return b.isPrimaryClient&&ga(b,a.targetId,c.zu),c}async function gh(a,b){var c;let d=c=a;return eN(d.localStore,b).then(a=>gd(d,a))}async function gi(e,b,c,f){var g;let a=g=e,d=await function(b,e){var c,d;let a=c=b,f=d=a.mutationQueue;return a.persistence.runTransaction("Lookup mutation documents","readonly",b=>f.yn(b,e).next(c=>c?a.localDocuments.getDocuments(b,c):av.resolve(null)))}(a.localStore,b);null!==d?("pending"===c?await fr(a.remoteStore):"acknowledged"===c||"rejected"===c?(f7(a,b,f||null),f6(a,b),function(a,b){var c,d;(d=(c=a).mutationQueue).In(b)}(a.localStore,b)):U(),await gd(a,d)):Q("SyncEngine","Cannot apply mutation batch with id: "+b)}async function gj(c,b){var d;let a=d=c;if(gp(a),gq(a),!0===b&& !0!==a.ac){let e=a.sharedClientState.getAllActiveQueryTargets(),g=await gk(a,e.toArray());for(let h of(a.ac=!0,await fB(a.remoteStore,!0),g))fe(a.remoteStore,h)}else if(!1===b&& !1!==a.ac){let i=[],k=Promise.resolve();a.ec.forEach((c,b)=>{a.sharedClientState.isLocalQueryTarget(b)?i.push(b):k=k.then(()=>(f8(a,b),eK(a.localStore,b,!0))),ff(a.remoteStore,b)}),await k,await gk(a,i),function(b){var c;let a=c=b;a.ic.forEach((c,b)=>{ff(a.remoteStore,b)}),a.rc.cs(),a.ic=new Map,a.sc=new j(f.comparator)}(a),a.ac=!1,await fB(a.remoteStore,!1)}}async function gk(i,j,n){var k;let a=k=i,e=[],f=[];for(let c of j){let d,b=a.ec.get(c);if(b&&0!==b.length)for(let l of(d=await eJ(a.localStore,bN(b[0])),b)){let m=a.tc.get(l),g=await gg(a,m);g.snapshot&&f.push(g.snapshot)}else{let h=await eM(a.localStore,c);d=await eJ(a.localStore,h),await f$(a,gl(h),c,!1)}e.push(d)}return a.Zu.Go(f),e}function gl(a){return bH(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function gm(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).Ri()}async function gn(e,b,d,f){var g;let a=g=e;if(a.ac)return void Q("SyncEngine","Ignoring unexpected query state notification.");let c=a.ec.get(b);if(c&&c.length>0)switch(d){case"current":case"not-current":{let h=await eN(a.localStore,bT(c[0])),i=cD.createSynthesizedRemoteEventForCurrentChange(b,"current"===d);await gd(a,h,i);break}case"rejected":await eK(a.localStore,b,!0),f8(a,b,f);break;default:U()}}async function go(f,g,h){let a=gp(f);if(a.ac){for(let b of g){if(a.ec.has(b)){Q("SyncEngine","Adding an already active target "+b);continue}let c=await eM(a.localStore,b),d=await eJ(a.localStore,c);await f$(a,gl(c),d.targetId,!1),fe(a.remoteStore,d)}for(let e of h)a.ec.has(e)&&await eK(a.localStore,e,!1).then(()=>{ff(a.remoteStore,e),f8(a,e)}).catch(au)}}function gp(b){var c;let a=c=b;return a.remoteStore.remoteSyncer.applyRemoteEvent=f1.bind(null,a),a.remoteStore.remoteSyncer.getRemoteKeysForTarget=gf.bind(null,a),a.remoteStore.remoteSyncer.rejectListen=f3.bind(null,a),a.Zu.Go=fN.bind(null,a.eventManager),a.Zu.lc=fO.bind(null,a.eventManager),a}function gq(b){var c;let a=c=b;return a.remoteStore.remoteSyncer.applySuccessfulWrite=f4.bind(null,a),a.remoteStore.remoteSyncer.rejectFailedWrite=f5.bind(null,a),a}class gr{constructor(){this.synchronizeTabs=!1}async initialize(a){this.wt=e6(a.databaseInfo.databaseId),this.sharedClientState=this.dc(a),this.persistence=this._c(a),await this.persistence.start(),this.localStore=this.wc(a),this.gcScheduler=this.mc(a,this.localStore),this.indexBackfillerScheduler=this.gc(a,this.localStore)}mc(a,b){return null}gc(a,b){return null}wc(a){return eE(this.persistence,new eC,a.initialUser,this.wt)}_c(a){return new es(eu.Ms,this.wt)}dc(a){return new e$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gs{async initialize(b,a){this.localStore||(this.localStore=b.localStore,this.sharedClientState=b.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!b.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>f2(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=ge.bind(null,this.syncEngine),await fB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new fK}createDatastore(a){var b,c,d,e,f;let g=e6(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new e3(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new fa(c,d,e,f)}createRemoteStore(f){var a,b,c,d,e;return a=this.localStore,b=this.datastore,c=f.asyncQueue,d=a=>f2(this.syncEngine,a,0),e=e0.V()?new e0:new e_,new fb(a,b,c,d,e)}createSyncEngine(a,b){return function(b,c,d,e,f,g,h){let a=new fY(b,c,d,e,f,g);return h&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(b){var c;let a=c=b;Q("RemoteStore","RemoteStore shutting down."),a.lu.add(5),await fd(a),a.du.shutdown(),a._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class gt{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Ic(this.observer.next,a)}error(a){this.observer.error?this.Ic(this.observer.error,a):console.error("Uncaught Error in snapshot listener:",a)}Tc(){this.muted=!0}Ic(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class gu{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(b){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new W(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let a=await async function(c,a){var d;let b=d=c,e=cY(b.wt)+"/documents",f={documents:a.map(a=>cU(b.wt,a))},g=await b.ao("BatchGetDocuments",e,f,a.length),i=new Map;g.forEach(e=>{var c,a;let d=(c=b.wt,"found"in(a=e)?function(b,a){var f;a.found||U(),a.found.name,a.found.updateTime;let c=cV(b,a.found.name),d=cR(a.found.updateTime),e=new bi({mapValue:{fields:a.found.fields}});return bk.newFoundDocument(c,d,e)}(c,a):"missing"in a?function(b,a){var e,f;a.missing||U(),!a.readTime&&U();let c=cV(b,a.missing),d=cR(a.readTime);return bk.newNoDocument(c,d)}(c,a):U());i.set(d.key.toString(),d)});let h=[];return a.forEach(b=>{var c;let a=i.get(b.toString());a||U(),h.push(a)}),h}(this.datastore,b);return a.forEach(a=>this.recordVersion(a)),a}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new cm(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((c,b)=>{let a=f.fromPath(b);this.mutations.push(new cn(a,this.precondition(a)))}),await async function(b,c){var d;let a=d=b,e=cY(a.wt)+"/documents",f={writes:c.map(b=>c0(a.wt,b))};await a.ro("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw U();b=ah.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new W(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?ca.updateTime(b):ca.none()}preconditionForUpdate(b){let a=this.readVersions.get(b.toString());if(!this.writtenDocs.has(b.toString())&&a){if(a.isEqual(ah.min()))throw new W(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ca.updateTime(a)}return ca.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class gv{constructor(c,d,a,e){this.authCredentials=c,this.appCheckCredentials=d,this.asyncQueue=a,this.databaseInfo=e,this.user=b.UNAUTHENTICATED,this.clientId=ae.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async a=>{Q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(a,a=>(Q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new X;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=fF(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function gw(a,b){a.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await eF(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function gx(a,b){a.asyncQueue.verifyOperationInProgress();let c=await gy(a);Q("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>fA(b.remoteStore,a)),a.setAppCheckTokenChangeListener((c,a)=>fA(b.remoteStore,a)),a.onlineComponents=b}async function gy(a){return a.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await gw(a,new gr)),a.offlineComponents}async function gz(a){return a.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await gx(a,new gs)),a.onlineComponents}async function gA(c){let a=await gz(c),b=a.eventManager;return b.onListen=fZ.bind(null,a.syncEngine),b.onUnlisten=f_.bind(null,a.syncEngine),b}let gB=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gC(a,b,c){if(!c)throw new W(V.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function gD(a){if(!f.isDocumentKey(a))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function gE(a){if(f.isDocumentKey(a))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function gF(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":U()}function gG(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=gF(a);throw new W(V.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class gH{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new W(V.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class C{constructor(a,b,c){this._authCredentials=b,this._appCheckCredentials=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gH({}),this._settingsFrozen=!1,a instanceof aW?this._databaseId=a:(this._app=a,this._databaseId=function(a){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new aW(a.options.projectId)}(a))}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gH(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new Z;switch(a.type){case"gapi":var c;let b=a.client;return("object"!=typeof b||null===b||!b.auth||!b.auth.getAuthHeaderValueForFirstParty)&&U(),new aa(b,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=gB.get(a);b&&(Q("ComponentProvider","Removing Datastore"),gB.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class gI{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gJ(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new gI(this.firestore,a,this._key)}}class D{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new D(this.firestore,a,this._query)}}class gJ extends D{constructor(b,c,a){super(b,c,bI(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new gI(this.firestore,null,new f(a))}withConverter(a){return new gJ(this.firestore,a,this._path)}}function gK(a,b,...c){if(a=(0,t.m9)(a),gC("collection","path",b),a instanceof C){let d=ai.fromString(b,...c);return gE(d),new gJ(a,null,d)}{if(!(a instanceof gI||a instanceof gJ))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(ai.fromString(b,...c));return gE(e),new gJ(a.firestore,null,e)}}class gL extends C{constructor(a,b,c){super(a,b,c),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new e7(this,"async_queue_retry"),this.Kc=()=>{let a=e5();a&&Q("AsyncQueue","Visibility state changed to "+a.visibilityState),this.So.Eo()};let a=e5();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Gc(),this.Qc(a)}enterRestrictedMode(b){if(!this.Fc){this.Fc=!0,this.Uc=b||!1;let a=e5();a&&"function"==typeof a.removeEventListener&&a.removeEventListener("visibilitychange",this.Kc)}}enqueue(a){if(this.Gc(),this.Fc)return new Promise(()=>{});let b=new X;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Mc.push(a),this.jc()))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(a){if(!aA(a))throw a;Q("AsyncQueue","Operation failed with retryable error: "+a)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(b){let a=this.Oc.then(()=>(this.Lc=!0,b().catch(b=>{var a;this.Bc=b,this.Lc=!1;let c,d=(c=(a=b).message||"",a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+"\n"+a.stack),c);throw R("INTERNAL UNHANDLED ERROR: ",d),b}).then(a=>(this.Lc=!1,a))));return this.Oc=a,a}enqueueAfterDelay(a,b,d){this.Gc(),this.qc.indexOf(a)> -1&&(b=0);let c=fE.createAndSchedule(this,a,b,d,a=>this.Wc(a));return this.$c.push(c),c}Gc(){this.Bc&&U()}verifyOperationInProgress(){}async zc(){let a;do await (a=this.Oc);while(a!==this.Oc)}Hc(a){for(let b of this.$c)if(b.timerId===a)return!0;return!1}Jc(a){return this.zc().then(()=>{for(let b of(this.$c.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.$c))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.zc()})}Yc(a){this.qc.push(a)}Wc(a){let b=this.$c.indexOf(a);this.$c.splice(b,1)}},this._persistenceKey="name"in a?a.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gO(this),this._firestoreClient.terminate()}}function gM(a=(0,I.Mq)()){return(0,I.qX)(a,"firestore").getImmediate()}function gN(a){return a._firestoreClient||gO(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function gO(a){var c,d,e,f,b;let g=a._freezeSettings(),h=(d=a._databaseId,e=(null===(c=a._app)|| void 0===c?void 0:c.options.appId)||"",f=a._persistenceKey,b=g,new aV(d,e,f,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,b.useFetchStreams));a._firestoreClient=new gv(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class gP{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ak(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class gQ{constructor(a){this._byteString=a}static fromBase64String(a){try{return new gQ(n.fromBase64String(a))}catch(b){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new gQ(n.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class gR{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class gS{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return u(this._lat,a._lat)||u(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gT=/^__.*__$/;class gU{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new ci(a,this.data,this.fieldMask,b,this.fieldTransforms):new ch(a,this.data,b,this.fieldTransforms)}}class gV{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new ci(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function gW(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class gX{constructor(b,c,d,e,a,f){this.settings=b,this.databaseId=c,this.wt=d,this.ignoreUndefinedProperties=e,void 0===a&&this.Xc(),this.fieldTransforms=a||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(a){return new gX(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(b){var a;let d=null===(a=this.path)|| void 0===a?void 0:a.child(b),c=this.ta({path:d,na:!1});return c.sa(b),c}ia(c){var a;let d=null===(a=this.path)|| void 0===a?void 0:a.child(c),b=this.ta({path:d,na:!1});return b.Xc(),b}ra(a){return this.ta({path:void 0,na:!0})}oa(a){return ha(a,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}Xc(){if(this.path)for(let a=0;a<this.path.length;a++)this.sa(this.path.get(a))}sa(a){if(0===a.length)throw this.oa("Document fields must not be empty");if(gW(this.Zc)&&gT.test(a))throw this.oa('Document fields cannot begin and end with "__"')}}class gY{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.wt=c||e6(a)}aa(a,b,c,d=!1){return new gX({Zc:a,methodName:b,ca:c,path:ak.emptyPath(),na:!1,ua:d},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gZ(a){let b=a._freezeSettings(),c=e6(a._databaseId);return new gY(a._databaseId,!!b.ignoreUndefinedProperties,c)}function g$(j,g,h,i,k,b={}){let a=j.aa(b.merge||b.mergeFields?2:0,g,h,k);g6("Data must be an object, but it was:",a,i);let l=g4(i,a),c,d;if(b.merge)c=new aN(a.fieldMask),d=a.fieldTransforms;else if(b.mergeFields){let f=[];for(let m of b.mergeFields){let e=g7(g,m,h);if(!a.contains(e))throw new W(V.INVALID_ARGUMENT,`Field '${e}' is specified in your field mask but missing from your input data.`);hb(f,e)||f.push(e)}c=new aN(f),d=a.fieldTransforms.filter(a=>c.covers(a.field))}else c=null,d=a.fieldTransforms;return new gU(new bi(l),c,d)}class g_ extends null{_toFieldTransform(a){if(2!==a.Zc)throw 1===a.Zc?a.oa(`${this._methodName}() can only appear at the top level of your update data`):a.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof g_}}function g0(b,a,c){return new gX({Zc:3,ca:a.settings.ca,methodName:b._methodName,na:c},a.databaseId,a.wt,a.ignoreUndefinedProperties)}class g1 extends null{_toFieldTransform(a){return new b8(a.path,new b0)}isEqual(a){return a instanceof g1}}function g2(a,b,c,d=!1){return g3(c,a.aa(d?4:3,b))}function g3(b,a){if(g5(b=(0,t.m9)(b)))return g6("Unsupported field value:",a,b),g4(b,a);if(b instanceof gR)return function(b,a){if(!gW(a.Zc))throw a.oa(`${b._methodName}() can only be used with update() and set()`);if(!a.path)throw a.oa(`${b._methodName}() is not currently supported inside arrays`);let c=b._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(b,a),null;if(void 0===b&&a.ignoreUndefinedProperties)return null;if(a.path&&a.fieldMask.push(a.path),b instanceof Array){if(a.settings.na&&4!==a.Zc)throw a.oa("Nested arrays are not supported");return function(d,e){let b=[],c=0;for(let f of d){let a=g3(f,e.ra(c));null==a&&(a={nullValue:"NULL_VALUE"}),b.push(a),c++}return{arrayValue:{values:b}}}(b,a)}return function(a,b){if(null===(a=(0,t.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return bY(b.wt,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let e=ag.fromDate(a);return{timestampValue:cP(b.wt,e)}}if(a instanceof ag){let f=new ag(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:cP(b.wt,f)}}if(a instanceof gS)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof gQ)return{bytesValue:cQ(b.wt,a._byteString)};if(a instanceof gI){let c=b.databaseId,d=a.firestore._databaseId;if(!d.isEqual(c))throw b.oa(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:cS(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.oa(`Unsupported field value: ${gF(a)}`)}(b,a)}function g4(b,a){let c={};return aJ(b)?a.path&&a.path.length>0&&a.fieldMask.push(a.path):aI(b,(b,e)=>{let d=g3(e,a.ea(b));null!=d&&(c[b]=d)}),{mapValue:{fields:c}}}function g5(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof ag||a instanceof gS||a instanceof gQ||a instanceof gI||a instanceof gR)}function g6(c,d,b){var a;if(!g5(b)||"object"!=typeof(a=b)||null===a||Object.getPrototypeOf(a)!==Object.prototype&&null!==Object.getPrototypeOf(a)){let e=gF(b);throw"an object"===e?d.oa(c+" a custom object"):d.oa(c+" "+e)}}function g7(b,a,c){if((a=(0,t.m9)(a))instanceof gP)return a._internalPath;if("string"==typeof a)return g9(b,a);throw ha("Field path arguments must be of type string or ",b,!1,void 0,c)}let g8=RegExp("[~\\*/\\[\\]]");function g9(b,a,c){if(a.search(g8)>=0)throw ha(`Invalid field path (${a}). Paths must not contain '~', '*', '/', '[', or ']'`,b,!1,void 0,c);try{return new gP(...a.split("."))._internalPath}catch(d){throw ha(`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,b,!1,void 0,c)}}function ha(g,h,i,b,d){let e=b&&!b.isEmpty(),f=void 0!==d,c=`Function ${h}() called with invalid data`;i&&(c+=" (via `toFirestore()`)"),c+=". ";let a="";return(e||f)&&(a+=" (found",e&&(a+=` in field ${b}`),f&&(a+=` in document ${d}`),a+=")"),new W(V.INVALID_ARGUMENT,c+g+a)}function hb(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class q{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new gI(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new hc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(b){if(this._document){let a=this._document.data.field(hd("DocumentSnapshot.get",b));if(null!==a)return this._userDataWriter.convertValue(a)}}}class hc extends q{data(){return super.data()}}function hd(b,a){return"string"==typeof a?g9(b,a):a instanceof gP?a._internalPath:a._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class he{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class E extends q{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new hf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(b,c={}){if(this._document){let a=this._document.data.field(hd("DocumentSnapshot.get",b));if(null!==a)return this._userDataWriter.convertValue(a,c.serverTimestamps)}}}class hf extends E{data(a={}){return super.data(a)}}class hg{constructor(b,c,d,a){this._firestore=b,this._userDataWriter=c,this._snapshot=a,this.metadata=new he(a.hasPendingWrites,a.fromCache),this.query=d}get docs(){let a=[];return this.forEach(b=>a.push(b)),a}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(a,b){this._snapshot.docs.forEach(c=>{a.call(b,new hf(this._firestore,this._userDataWriter,c.key,c,new he(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(b={}){let a=!!b.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(a,b){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(b=>({type:"added",doc:new hf(a._firestore,a._userDataWriter,b.doc.key,b.doc,new he(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),oldIndex:-1,newIndex:c++}))}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(a=>b||3!==a.type).map(b=>{let f=new hf(a._firestore,a._userDataWriter,b.doc.key,b.doc,new he(a._snapshot.mutatedKeys.has(b.doc.key),a._snapshot.fromCache),a.query.converter),c=-1,e=-1;return 0!==b.type&&(c=d.indexOf(b.doc.key),d=d.delete(b.doc.key)),1!==b.type&&(e=(d=d.add(b.doc)).indexOf(b.doc.key)),{type:hh(b.type),doc:f,oldIndex:c,newIndex:e}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function hh(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class F{}function hi(a,...b){for(let c of b)a=c._apply(a);return a}class hj extends F{constructor(a,b,c){super(),this.fa=a,this.da=b,this._a=c,this.type="where"}_apply(a){let b=gZ(a.firestore),c=function(d,j,k,f,g,a,b){let c;if(g.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${a}' queries on documentId().`);if("in"===a||"not-in"===a){hn(b,a);let h=[];for(let l of b)h.push(hm(f,d,l));c={arrayValue:{values:h}}}else c=hm(f,d,b)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||hn(b,a),c=g2(k,j,b,"in"===a||"not-in"===a);let i=e.create(g,a,c);return function(b,a){if(a.ht()){let c=bK(b);if(null!==c&&!c.isEqual(a.field))throw new W(V.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${c.toString()}' and '${a.field.toString()}'`);let e=bJ(b);null!==e&&ho(b,a.field,e)}let d=function(b,c){for(let a of b.filters)if(c.indexOf(a.op)>=0)return a.op;return null}(b,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(a.op));if(null!==d)throw d===a.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${a.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${a.op.toString()}' filters with '${d.toString()}' filters.`)}(d,i),i}(a._query,"where",b,a.firestore._databaseId,this.fa,this.da,this._a);return new D(a.firestore,a.converter,function(a,b){let c=a.filters.concat([b]);return new bG(a.path,a.collectionGroup,a.explicitOrderBy.slice(),c,a.limit,a.limitType,a.startAt,a.endAt)}(a._query,c))}}function hk(a,b,c){let d=hd("where",a);return new hj(d,b,c)}function hl(a,c,b,d){if(b[0]=getModularInstance(b[0]),b[0]instanceof q)return function(e,f,g,b,h){if(!b)throw new W(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${g}().`);let c=[];for(let a of bM(e))if(a.field.isKeyField())c.push(a6(f,b.key));else{let d=b.data.field(a.field);if(aS(d))throw new W(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===d){let i=a.field.canonicalString();throw new W(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}c.push(d)}return new bB(c,h)}(a._query,a.firestore._databaseId,c,b[0]._document,d);{let e=gZ(a.firestore);return function(d,j,k,b,e,l){let i=d.explicitOrderBy;if(e.length>i.length)throw new W(V.INVALID_ARGUMENT,`Too many arguments provided to ${b}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let g=[];for(let c=0;c<e.length;c++){let a=e[c];if(i[c].field.isKeyField()){if("string"!=typeof a)throw new W(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${b}(), but got a ${typeof a}`);if(!bL(d)&& -1!==a.indexOf("/"))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${b}() must be a plain document ID, but '${a}' contains a slash.`);let h=d.path.child(ai.fromString(a));if(!f.isDocumentKey(h))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${b}() must result in a valid document path, but '${h}' is not because it contains an odd number of segments.`);let m=new f(h);g.push(a6(j,m))}else{let n=g2(k,b,a);g.push(n)}}return new bB(g,l)}(a._query,a.firestore._databaseId,e,c,b,d)}}function hm(c,d,a){if("string"==typeof(a=(0,t.m9)(a))){if(""===a)throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bL(d)&& -1!==a.indexOf("/"))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);let b=d.path.child(ai.fromString(a));if(!f.isDocumentKey(b))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${b}' is not because it has an odd number of segments (${b.length}).`);return a6(c,new f(b))}if(a instanceof gI)return a6(c,a._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gF(a)}.`)}function hn(a,b){if(!Array.isArray(a)||0===a.length)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new W(V.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function ho(c,a,b){if(!b.isEqual(a))throw new W(V.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${a.toString()}' and so you must also use '${a.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${b.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class G{convertValue(a,b="none"){switch(a_(a)){case 0:return null;case 1:return a.booleanValue;case 2:return aQ(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(aR(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw U()}}convertObject(a,c){let b={};return aI(a.fields,(a,d)=>{b[a]=this.convertValue(d,c)}),b}convertGeoPoint(a){return new gS(aQ(a.latitude),aQ(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=aT(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(aU(a));default:return null}}convertTimestamp(b){let a=aP(b);return new ag(a.seconds,a.nanos)}convertDocumentKey(e,b){var g;let a=ai.fromString(e);(g=dd(a))||U();let c=new aW(a.get(1),a.get(3)),d=new f(a.popFirst(5));return c.isEqual(b)||R(`Document ${d} contains a document reference within a different database (${c.projectId}/${c.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function hp(b,c,a){return b?a&&(a.merge||a.mergeFields)?b.toFirestore(c,a):b.toFirestore(c):c}function hq(a,b){if((a=getModularInstance(a)).firestore!==b)throw new W(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}class hr extends G{constructor(a){super(),this.firestore=a}convertBytes(a){return new gQ(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new gI(this.firestore,null,b)}}function hs(a){a=gG(a,D);let b=gG(a.firestore,gL),c=gN(b),d=new hr(b);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function b(a){if("L"===a.limitType&&0===a.explicitOrderBy.length)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(a._query),(function c(a,d,e={}){let b=new X;return a.asyncQueue.enqueueAndForget(async()=>(function(a,e,b,f,g){let c=new gt({next(b){e.enqueueAndForget(()=>fM(a,d)),b.fromCache&&"server"===f.source?g.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:a=>g.reject(a)}),d=new fQ(b,c,{includeMetadataChanges:!0,Du:!0});return fL(a,d)})(await gA(a),a.asyncQueue,d,e,b)),b.promise})(c,a._query).then(c=>new hg(b,d,a,c)))}function ht(a){return hv(gG(a.firestore,gL),[new cm(a._key,ca.none())])}function hu(a,c){let d=gG(a.firestore,gL),b=function(a,b,...c){if(a=(0,t.m9)(a),1===arguments.length&&(b=ae.I()),gC("doc","path",b),a instanceof C){let d=ai.fromString(b,...c);return gD(d),new gI(a,null,new f(d))}{if(!(a instanceof gI||a instanceof gJ))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(ai.fromString(b,...c));return gD(e),new gI(a.firestore,a instanceof gJ?a.converter:null,new f(e))}}(a),e=hp(a.converter,c);return hv(d,[g$(gZ(a.firestore),"addDoc",b._key,e,null!==a.converter,{}).toMutation(b._key,ca.exists(!1))]).then(()=>b)}function hv(a,b){return function(a,c){let b=new X;return a.asyncQueue.enqueueAndForget(async()=>{var d;return f0(await (d=a,gz(d).then(a=>a.syncEngine)),c,b)}),b.promise}(gN(a),b)}!function(a,b=!0){var c;N=I.Jn,(0,I.Xd)(new J.wA("firestore",(a,{options:c})=>{let e=a.getProvider("app").getImmediate(),d=new gL(e,new $(a.getProvider("auth-internal")),new ac(a.getProvider("app-check-internal")));return c=Object.assign({useFetchStreams:b},c),d._setSettings(c),d},"PUBLIC")),(0,I.KN)(M,"3.4.12",void 0),(0,I.KN)(M,"3.4.12","esm2017")}()}}])