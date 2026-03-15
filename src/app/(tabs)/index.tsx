import creatCommmunity from "@/assets/png/communityCreate.png";
import AskDoctor from "@/assets/png/doctornew.png";
import fertility from "@/assets/png/fertility.png";
import for_you from "@/assets/png/for_you.png";
import gutHealth from "@/assets/png/gut_health.png";
import hairCare from "@/assets/png/hair_care.png";
import heart from "@/assets/png/heart.png";
import mental from "@/assets/png/mental.png";
import parenting from "@/assets/png/parenting.png";
import creatPost from "@/assets/png/postCreate.png";
import pregnancy from "@/assets/png/pregnancy.png";
import sexualHealth from "@/assets/png/sexual_health.png";
import skinCare from "@/assets/png/skin_care.png";
import weight from "@/assets/png/weight.png";
import womenHealth from "@/assets/png/women_health.png";
import image0 from "@/assets/videos/0.mp4";
import image1 from "@/assets/videos/1.mp4";
import image2 from "@/assets/videos/2.mp4";
import { Ionicons } from "@expo/vector-icons";
import { GlassView } from "expo-glass-effect";
import { Image } from "expo-image";
import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { avatar } from "../../../utils/constsnts";

const CATEGORIES = [
  { title: "For you", image: for_you, label: "For%20you" },
  { title: "Sexual Health", image: sexualHealth, label: "Sexual%20Health" },
  { title: "Skin Care", image: skinCare, label: "Skin%20Care" },
  { title: "Hair care", image: hairCare, label: "Hair%20Care" },
  { title: "Fertility", image: fertility, label: "Fertility" },
  { title: "Gut Health", image: gutHealth, label: "Gut%20Health" },
  { title: "Weight Loss", image: weight, label: "Weight%20Loss" },
  { title: "Mental Health", image: mental, label: "Mental%20Health" },
  { title: "Women Health", image: womenHealth, label: "Women's%20Health" },
  { title: "Parenting", image: parenting, label: "Parenting" },
  { title: "Heart health", image: heart, label: "Heart%20Health" },
  { title: "Pregnancy", image: pregnancy, label: "Pregnancy" },
];

const SEARCH_HEIGHT = 50;
const BANNER_HEIGHT = 260;
const { width } = Dimensions.get("window");
const videos = [image0, image1, image2];

const TopicsRow = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={topicStyles.container}
  >
    {CATEGORIES.map((topic, i) => (
      <View key={i} style={topicStyles.item}>
        <View style={topicStyles.circle}>
          <Image source={topic.image} style={topicStyles.image} />
        </View>
        <Text style={topicStyles.label}>{topic.title}</Text>
      </View>
    ))}
  </ScrollView>
);

const topicStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  item: {
    alignItems: "center",
    gap: 6,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 99,
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#2a2a2a",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  label: {
    color: "#aaa",
    fontSize: 11,
    textAlign: "center",
    maxWidth: 100,
  },
});

const SearchBar = ({
  insetTop,
  glassOpacity,
}: {
  insetTop: number;
  glassOpacity: number;
}) => {
  return (
    <View style={[searchBarStyles.wrapper, { paddingTop: insetTop }]}>
      {/* Explicit width+height so GlassView renders on iOS */}
      <View style={[StyleSheet.absoluteFill, { opacity: glassOpacity }]}>
        <GlassView style={{ flex: 1, width: "100%", height: "100%" }} />
      </View>

      <GlassView style={searchBarStyles.avatarContainer}>
        <Image source={{ uri: avatar }} style={searchBarStyles.avatar} />
      </GlassView>

      <GlassView style={searchBarStyles.glass}>
        <Ionicons name="search-outline" size={18} color="#fff" />
        <Text style={searchBarStyles.placeholder}>Search medicines...</Text>
      </GlassView>

      <GlassView style={searchBarStyles.notification}>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </GlassView>
    </View>
  );
};

const searchBarStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  avatarContainer: {
    width: 42,
    height: 42,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    zIndex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 999,
  },
  glass: {
    flex: 1,
    height: 42,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    zIndex: 1,
  },
  placeholder: {
    marginLeft: 8,
    color: "#eee",
    fontSize: 15,
  },
  notification: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
});

function BannerVideo({ source, active }: { source: any; active: boolean }) {
  const player = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.muted = true;
    if (active) player.play();
  });

  useEffect(() => {
    if (active) player.play();
    else player.pause();
  }, [active]);

  return (
    <VideoView
      player={player}
      style={{ width, height: BANNER_HEIGHT }}
      contentFit="cover"
      allowsPictureInPicture={false}
    />
  );
}

export default function Page() {
  const insets = useSafeAreaInsets();
  const searchBarTotal = insets.top + SEARCH_HEIGHT;

  const forYouOffsetRef = useRef<number>(0);
  const [isForYouSticky, setIsForYouSticky] = useState(false);
  const [glassOpacity, setGlassOpacity] = useState(0);

  const bannerRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (index + 1) % videos.length;
      bannerRef.current?.scrollTo({ x: next * width, animated: true });
      setIndex(next);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
      <SearchBar insetTop={insets.top} glassOpacity={glassOpacity} />

      <View
        style={{
          top: searchBarTotal,
          position: "absolute",
          left: 0,
          right: 0,
          zIndex: 15,
          pointerEvents: isForYouSticky ? "auto" : "none",
          display: isForYouSticky ? "flex" : "none",
        }}
      >
        <GlassView
          style={{ width: "100%" }}
          glassEffectStyle={{
            style: isForYouSticky ? "regular" : "none", // ← toggles glass on/off
            animate: true,
            animationDuration: 0.3,
          }}
        >
          <TopicsRow />
        </GlassView>
      </View>

      <ScrollView
        style={styles.container}
        scrollEventThrottle={16}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;
          const forYouY = forYouOffsetRef.current;
          const end = forYouY - searchBarTotal;
          const start = end - 150;
          const progress = (y - start) / (end - start);

          setGlassOpacity(Math.min(1, Math.max(0, progress)));
          setIsForYouSticky(y > forYouY - searchBarTotal);
        }}
      >
        <View style={styles.banner}>
          <ScrollView
            ref={bannerRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const i = Math.round(e.nativeEvent.contentOffset.x / width);
              setIndex(i);
            }}
          >
            {videos.map((video, i) => {
              const shouldRender = Math.abs(i - index) <= 1;
              return shouldRender ? (
                <BannerVideo key={i} source={video} active={i === index} />
              ) : (
                <View key={i} style={{ width, height: BANNER_HEIGHT }} />
              );
            })}
          </ScrollView>

          <View style={styles.dots}>
            {videos.map((_, i) => (
              <View
                key={i}
                style={[styles.dot, i === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>

        <View style={{ marginTop: 30, marginHorizontal: 6, marginBottom: 20 }}>
          <View style={quickStyles.row}>
            {/* Ask Doctor */}
            <View
              style={[
                quickStyles.cardWrapper,
                {
                  marginTop: 10,
                  shadowColor: "#2A5080",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.6,
                  shadowRadius: 16,
                  elevation: 12,
                },
              ]}
            >
              <Image
                source={AskDoctor}
                style={quickStyles.illustration}
                contentFit="contain"
              />
              <View style={quickStyles.card}>
                <View
                  style={[quickStyles.top, { backgroundColor: "#1A2840" }]}
                />
                <View style={quickStyles.bottom} />
                <Text style={quickStyles.cardLabel}>Ask Doctor</Text>
              </View>
            </View>
            {/* Create Post */}
            <View
              style={[
                quickStyles.cardWrapper,
                {
                  marginTop: -20,
                  shadowColor: "#845ab4",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.6,
                  shadowRadius: 16,
                  elevation: 12,
                },
              ]}
            >
              <Image
                source={creatPost}
                style={quickStyles.illustration}
                contentFit="contain"
              />
              <View style={quickStyles.card}>
                <View
                  style={[quickStyles.top, { backgroundColor: "#2D1F3D" }]}
                />
                <View style={quickStyles.bottom} />
                <Text style={quickStyles.cardLabel}>Create Post</Text>
              </View>
            </View>

            {/* Communities */}
            <View
              style={[
                quickStyles.cardWrapper,
                {
                  marginTop: 10,
                  shadowColor: "#2e5648",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.6,
                  shadowRadius: 16,
                  elevation: 12,
                },
              ]}
            >
              <Image
                source={creatCommmunity}
                style={{
                  width: "100%",
                  height: 125,
                  zIndex: 2, // sits above card
                  marginBottom: -65, // overlaps into card top
                }}
                contentFit="contain"
              />
              <View
                style={{
                  width: "100%",
                  borderRadius: 22,
                  borderWidth: 1,
                  borderColor: "#252525",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: 90,
                  overflow: "hidden", // ← back to hidden, bg stays contained
                  zIndex: 1,
                }}
              >
                <View
                  style={[quickStyles.top, { backgroundColor: "#1A3028" }]}
                />
                <View style={quickStyles.bottom} />
                <Text style={quickStyles.cardLabel}>Communities</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          onLayout={(e) => {
            forYouOffsetRef.current = e.nativeEvent.layout.y;
          }}
          style={{ opacity: isForYouSticky ? 0 : 1 }}
        >
          <TopicsRow />
        </View>

        {Array.from({ length: 10 }).map((_, i) => (
          <View key={i} style={styles.card} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  banner: {
    height: BANNER_HEIGHT,
    marginBottom: 10,
  },
  dots: {
    position: "absolute",
    bottom: 14,
    alignSelf: "center",
    flexDirection: "row",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#494949",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 16,
  },
  header: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  card: {
    height: 300,
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 20,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#1f1f1f",
  },
});

const quickStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 15,
  },
  cardWrapper: {
    flex: 1,
    alignItems: "center",
  },
  illustration: {
    width: "100%",
    height: 110,
    zIndex: 2, // sits above card
    marginBottom: -50, // overlaps into card top
  },
  card: {
    width: "100%",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#252525",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90,
    overflow: "hidden", // ← back to hidden, bg stays contained
    zIndex: 1,
  },
  top: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "75%",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "35%",
    backgroundColor: "#111111",
  },
  cardLabel: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.3,
    zIndex: 2,
    paddingBottom: 10,
  },
});
